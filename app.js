// Initialize Map centered somewhat on the US
const map = L.map('map', {
    zoomControl: false // Move zoom control to bottom left
}).setView([39.8283, -98.5795], 4);

L.control.zoom({
    position: 'bottomleft'
}).addTo(map);

// Try to locate user dynamically
map.locate({ setView: true, maxZoom: 13 });

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// State
let selectedLatLng = null;
let markerSelection = null;
let heatLayer = null;
let markersLayer = L.layerGroup().addTo(map);

// Custom selection icon
const selectionIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Map click event
map.on('click', function (e) {
    selectedLatLng = e.latlng;

    // Update UI Elements
    document.getElementById('lat-display').textContent = selectedLatLng.lat.toFixed(5);
    document.getElementById('lng-display').textContent = selectedLatLng.lng.toFixed(5);
    document.getElementById('lat-input').value = selectedLatLng.lat;
    document.getElementById('lng-input').value = selectedLatLng.lng;

    // Enable submit
    document.getElementById('submit-btn').disabled = false;

    // Drop Pin
    if (markerSelection) {
        markerSelection.setLatLng(selectedLatLng);
    } else {
        markerSelection = L.marker(selectedLatLng, { icon: selectionIcon }).addTo(map);
        markerSelection.bindPopup("<div style='text-align:center;'><b>Location Selected</b><br><span style='font-size:0.8rem;color:#94a3b8;'>Fill out the form to report.</span></div>").openPopup();
    }
});

// Load Hotspots
async function loadHotspots() {
    try {
        const response = await fetch('/api/reports');
        const data = await response.json();

        // Remove existing map layers
        if (heatLayer) map.removeLayer(heatLayer);
        markersLayer.clearLayers();

        if (data.length === 0) return;

        // Generate Heatmap Matrix
        const heatData = data.map(r => [r.lat, r.lng, 1]);

        // Sophisticated Heatmap Gradient
        heatLayer = L.heatLayer(heatData, {
            radius: 28,
            blur: 20,
            maxZoom: 14,
            gradient: {
                0.2: '#3b82f6', // blue
                0.4: '#10b981', // green
                0.6: '#eab308', // yellow
                0.8: '#f97316', // orange
                1.0: '#ef4444'  // red
            }
        }).addTo(map);

        // Add Individual interactive points
        data.forEach(report => {
            const circle = L.circleMarker([report.lat, report.lng], {
                radius: 6,
                fillColor: "#f43f5e",
                color: "#1e1b4b",
                weight: 2,
                opacity: 0.8,
                fillOpacity: 0.9
            });

            circle.bindPopup(`
                <strong style="font-size: 1.05rem; display:block; margin-bottom: 2px;">${report.crime_type}</strong>
                <span style="font-size: 0.75rem; color: #94a3b8;">${new Date(report.report_time).toLocaleString()}</span>
                <p style="margin-top: 8px; margin-bottom:0; font-size: 0.9rem; line-height: 1.4;">${report.description || 'No additional details provided.'}</p>
            `);
            markersLayer.addLayer(circle);
        });

    } catch (error) {
        console.error("Hotspot API Error:", error);
    }
}

// Form Submission handling
document.getElementById('report-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById('submit-btn');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Submitting...</span>';
    submitBtn.disabled = true;

    const payload = {
        crime_type: document.getElementById('crime-type').value,
        description: document.getElementById('description').value,
        lat: parseFloat(document.getElementById('lat-input').value),
        lng: parseFloat(document.getElementById('lng-input').value)
    };

    const statusEl = document.getElementById('status-message');

    try {
        const response = await fetch('/api/reports', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            statusEl.textContent = "Incident properly logged.";
            statusEl.className = "status-success";

            // UI Reset
            document.getElementById('report-form').reset();
            document.getElementById('lat-display').textContent = "--";
            document.getElementById('lng-display').textContent = "--";

            if (markerSelection) {
                map.removeLayer(markerSelection);
                markerSelection = null;
            }

            // Refresh Map
            loadHotspots();

            setTimeout(() => { statusEl.textContent = ""; }, 3500);
        } else {
            const err = await response.json();
            statusEl.textContent = err.error || "Submission failed.";
            statusEl.className = "status-error";
            submitBtn.disabled = false;
        }
    } catch (error) {
        statusEl.textContent = "Network error. Try again.";
        statusEl.className = "status-error";
        submitBtn.disabled = false;
    } finally {
        submitBtn.innerHTML = originalBtnText;
    }
});

// Boot up Map Data
loadHotspots();
