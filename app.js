// Center Map on Hyderabad, Telangana
const map = L.map('map', { zoomControl: false }).setView([17.3850, 78.4867], 12);

L.control.zoom({ position: 'bottomleft' }).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19, attribution: '© OpenStreetMap'
}).addTo(map);

// State Variables
let selectedLatLng = null;
let markerSelection = null;
let scanCircle = null;
let heatLayer = null;
let markersLayer = L.layerGroup().addTo(map);
let isStaticMode = false;

let currentMode = 'history'; // 'history' or 'report'

// Haversine formula for static mode distance calculations
function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371.0; // Earth radius in km
    const dlat = (lat2 - lat1) * Math.PI / 180;
    const dlon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dlat / 2) ** 2 + 
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
              Math.sin(dlon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// Get all reports (combining embedded dataset + local additions)
function getLocalReports() {
    const localAdditions = JSON.parse(localStorage.getItem('added_reports') || '[]');
    const dataset = (typeof CRIME_DATA !== 'undefined') ? CRIME_DATA : [];
    return [...localAdditions, ...dataset];
}

// Listeners for Tabs
document.getElementById('tab-history').addEventListener('click', () => setMode('history'));
document.getElementById('tab-report').addEventListener('click', () => setMode('report'));

function setMode(mode) {
    currentMode = mode;
    document.getElementById('tab-history').classList.toggle('active', mode === 'history');
    document.getElementById('tab-report').classList.toggle('active', mode === 'report');
    document.getElementById('view-history').classList.toggle('hidden', mode !== 'history');
    document.getElementById('view-report').classList.toggle('hidden', mode !== 'report');
    
    // Cleanup UI when switching
    if (scanCircle) map.removeLayer(scanCircle);
    if (markerSelection) map.removeLayer(markerSelection);
    document.getElementById('incidents-list').innerHTML = '';
    document.getElementById('scan-status').innerHTML = '<span class="scan-icon">📍</span><span>Waiting for selection...</span>';
    document.getElementById('scan-status').className = 'scan-status';
}

const selectionIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41], iconAnchor: [12, 41]
});

// Map click event
map.on('click', async function(e) {
    selectedLatLng = e.latlng;
    
    // UI Updates for Report Form
    document.getElementById('lat-display').textContent = selectedLatLng.lat.toFixed(5);
    document.getElementById('lng-display').textContent = selectedLatLng.lng.toFixed(5);
    document.getElementById('lat-input').value = selectedLatLng.lat;
    document.getElementById('lng-input').value = selectedLatLng.lng;
    document.getElementById('submit-btn').disabled = false;

    // Drop Selection Pin
    if (markerSelection) map.removeLayer(markerSelection);
    markerSelection = L.marker(selectedLatLng, {icon: selectionIcon}).addTo(map);

    if (currentMode === 'history') {
        fetchNearbyCrimes(selectedLatLng.lat, selectedLatLng.lng);
    }
});

async function fetchNearbyCrimes(lat, lng) {
    if (scanCircle) map.removeLayer(scanCircle);
    
    // Draw 500m radius circle
    scanCircle = L.circle([lat, lng], {
        color: '#818cf8', fillColor: '#818cf8', fillOpacity: 0.1, radius: 500
    }).addTo(map);

    const statusEl = document.getElementById('scan-status');
    const listEl = document.getElementById('incidents-list');
    
    statusEl.innerHTML = '<span class="scan-icon">⚡</span><span>Scanning area...</span>';
    statusEl.className = "scan-status";
    listEl.innerHTML = "";

    // 1. Try static fallback if marked or if running on file protocol/github pages
    if (isStaticMode || window.location.protocol === 'file:' || window.location.hostname.includes('github.io')) {
        const allReports = getLocalReports();
        const nearby = [];
        allReports.forEach(report => {
            const distance = haversine(lat, lng, report.lat, report.lng);
            if (distance <= 0.5) { // 500 meters
                nearby.push({
                    ...report,
                    distance_km: distance
                });
            }
        });
        nearby.sort((a, b) => a.distance_km - b.distance_km);
        renderNearbyResults(nearby, lat, lng);
        return;
    }

    // 2. Local Flask API approach
    try {
        const response = await fetch(`/api/reports/nearby?lat=${lat}&lng=${lng}&radius=0.5`);
        if (!response.ok) throw new Error('API down');
        const data = await response.json();
        renderNearbyResults(data, lat, lng);
    } catch (error) {
        // Soft fallback to static calculations on error
        isStaticMode = true;
        const allReports = getLocalReports();
        const nearby = [];
        allReports.forEach(report => {
            const distance = haversine(lat, lng, report.lat, report.lng);
            if (distance <= 0.5) {
                nearby.push({
                    ...report,
                    distance_km: distance
                });
            }
        });
        nearby.sort((a, b) => a.distance_km - b.distance_km);
        renderNearbyResults(nearby, lat, lng);
    }
}

function renderNearbyResults(data, lat, lng) {
    const statusEl = document.getElementById('scan-status');
    const listEl = document.getElementById('incidents-list');
    
    showModal(data, lat, lng);

    if (data.length > 0) {
        statusEl.innerHTML = `<span class="scan-icon">⚠️</span><span>Warning: ${data.length} incidents found within 500m.</span>`;
        statusEl.className = "scan-status found";
        
        data.forEach(report => {
            const domNode = createIncidentCard(report);
            listEl.appendChild(domNode);
        });
    } else {
        statusEl.innerHTML = '<span class="scan-icon">🛡️</span><span>No reported incidents found in this 500m area.</span>';
        statusEl.className = "scan-status empty";
    }
}

function createIncidentCard(report) {
    const domNode = document.createElement('div');
    domNode.className = 'incident-card';
    domNode.innerHTML = `
        <div class="incident-header">
            <span class="incident-title">${report.crime_type}</span>
            <span class="incident-dist">${(report.distance_km * 1000).toFixed(0)}m</span>
        </div>
        <span class="incident-date">${report.report_time}</span>
        <p class="incident-desc">${report.description || 'No description provided.'}</p>
    `;
    return domNode;
}

function showModal(data, lat, lng) {
    const modal = document.getElementById('details-modal');
    const summaryEl = document.getElementById('modal-summary');
    const modalListEl = document.getElementById('modal-incidents-list');

    modalListEl.innerHTML = '';
    
    if (data.length > 0) {
        summaryEl.innerHTML = `Found <strong>${data.length}</strong> incidents near <code>${lat.toFixed(4)}, ${lng.toFixed(4)}</code> (500m radius).`;
        data.forEach(report => {
            modalListEl.appendChild(createIncidentCard(report));
        });
    } else {
        summaryEl.innerHTML = `No incidents found near <code>${lat.toFixed(4)}, ${lng.toFixed(4)}</code>. This area appears clear.`;
    }

    modal.classList.remove('hidden');
}

// Close modal logic
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('details-modal').classList.add('hidden');
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('details-modal');
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});

// Load Global Hotspots (The Heatmap)
async function loadHotspots() {
    // 1. Try static fallback if offline/github pages
    if (isStaticMode || window.location.protocol === 'file:' || window.location.hostname.includes('github.io')) {
        renderHotspots(getLocalReports());
        return;
    }

    // 2. Fetch from Python Server
    try {
        const response = await fetch('/api/reports');
        if (!response.ok) throw new Error('API down');
        const data = await response.json();
        renderHotspots(data);
    } catch (error) {
        isStaticMode = true;
        renderHotspots(getLocalReports());
    }
}

function renderHotspots(data) {
    if (heatLayer) map.removeLayer(heatLayer);
    markersLayer.clearLayers();
    if (data.length === 0) return;

    const heatData = data.map(r => [r.lat, r.lng, 1]); 
    heatLayer = L.heatLayer(heatData, {
        radius: 25, blur: 15, maxZoom: 15,
        gradient: { 0.2: '#3b82f6', 0.4: '#10b981', 0.6: '#eab308', 0.8: '#f97316', 1.0: '#ef4444' }
    }).addTo(map);

    updateStats(data);

    data.forEach(report => {
        const circle = L.circleMarker([report.lat, report.lng], {
            radius: 4, fillColor: "#ef4444", color: "transparent", weight: 0, fillOpacity: 0.6
        });
        circle.bindPopup(`<strong>${report.crime_type}</strong><br><span style="font-size:0.8rem">${report.report_time}</span>`);
        markersLayer.addLayer(circle);
    });
}

// Submit via Form
document.getElementById('report-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.disabled = true;

    const newReport = {
        crime_type: document.getElementById('crime-type').value,
        description: document.getElementById('description').value,
        lat: parseFloat(document.getElementById('lat-input').value),
        lng: parseFloat(document.getElementById('lng-input').value)
    };

    // 1. Static fallback execution
    if (isStaticMode || window.location.protocol === 'file:' || window.location.hostname.includes('github.io')) {
        const localAdditions = JSON.parse(localStorage.getItem('added_reports') || '[]');
        newReport.id = Date.now();
        newReport.report_time = new Date().toISOString().replace('T', ' ').substring(0, 19);
        localAdditions.unshift(newReport);
        localStorage.setItem('added_reports', JSON.stringify(localAdditions));

        document.getElementById('report-form').reset();
        document.getElementById('status-message').innerHTML = '<span class="status-success">Report submitted locally!</span>';
        loadHotspots();
        setTimeout(() => document.getElementById('status-message').innerHTML='', 3000);
        submitBtn.disabled = false;
        return;
    }

    // 2. Python backend execution
    try {
        const response = await fetch('/api/reports', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newReport)
        });

        if (response.ok) {
            document.getElementById('report-form').reset();
            document.getElementById('status-message').innerHTML = '<span class="status-success">Report submitted!</span>';
            loadHotspots();
            setTimeout(() => document.getElementById('status-message').innerHTML='', 3000);
        } else {
            throw new Error('Server error');
        }
    } catch (error) {
        document.getElementById('status-message').innerHTML = '<span class="status-error">Submission failed.</span>';
    } finally {
        submitBtn.disabled = false;
    }
});

// Update header stats bar
function updateStats(data) {
    const totalEl = document.getElementById('total-count');
    const zoneEl  = document.getElementById('zone-count');
    if (!totalEl || !zoneEl) return;
    totalEl.textContent = data.length;
    // Count distinct ~1km grid cells as "active zones"
    const zones = new Set(data.map(r => `${Math.round(r.lat*100)/100},${Math.round(r.lng*100)/100}`));
    zoneEl.textContent = zones.size;
}

// Boot up Map Data
loadHotspots();
