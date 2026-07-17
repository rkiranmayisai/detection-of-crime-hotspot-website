import sqlite3
from flask import Flask, render_template, request, jsonify
import os
import math

def haversine(lat1, lon1, lat2, lon2):
    R = 6371.0 # Earth radius in km
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    a = math.sin(dlat / 2)**2 + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(dlon / 2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    return R * c

app = Flask(__name__)
DB_PATH = os.path.join(os.path.dirname(__file__), 'database.db')

def init_db():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS reports (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            crime_type TEXT NOT NULL,
            description TEXT,
            lat REAL NOT NULL,
            lng REAL NOT NULL,
            report_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

# Initialize DB on startup
init_db()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/reports', methods=['GET'])
def get_reports():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('SELECT id, crime_type, description, lat, lng, report_time FROM reports')
    reports = []
    for row in c.fetchall():
        reports.append({
            'id': row[0],
            'crime_type': row[1],
            'description': row[2],
            'lat': row[3],
            'lng': row[4],
            'report_time': row[5]
        })
    conn.close()
    return jsonify(reports)

@app.route('/api/reports/nearby', methods=['GET'])
def get_nearby_reports():
    lat = float(request.args.get('lat', 0))
    lng = float(request.args.get('lng', 0))
    radius_km = float(request.args.get('radius', 0.5)) 

    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('SELECT id, crime_type, description, lat, lng, report_time FROM reports')
    
    nearby_reports = []
    for row in c.fetchall():
        crime_lat = row[3]
        crime_lng = row[4]
        distance = haversine(lat, lng, crime_lat, crime_lng)
        
        if distance <= radius_km:
            nearby_reports.append({
                'id': row[0],
                'crime_type': row[1],
                'description': row[2],
                'lat': crime_lat,
                'lng': crime_lng,
                'report_time': row[5],
                'distance_km': round(distance, 3)
            })
    conn.close()
    
    nearby_reports.sort(key=lambda x: x['distance_km'])
    return jsonify(nearby_reports)

@app.route('/api/reports', methods=['POST'])
def add_report():
    data = request.json
    crime_type = data.get('crime_type')
    description = data.get('description', '')
    lat = data.get('lat')
    lng = data.get('lng')

    if not crime_type or lat is None or lng is None:
        return jsonify({'error': 'Missing required fields'}), 400

    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('INSERT INTO reports (crime_type, description, lat, lng) VALUES (?, ?, ?, ?)',
              (crime_type, description, lat, lng))
    conn.commit()
    report_id = c.lastrowid
    conn.close()
    
    return jsonify({'message': 'Report added successfully', 'id': report_id}), 201

if __name__ == '__main__':
    app.run(debug=True, port=5000)
