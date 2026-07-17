import sqlite3
import os
import random
from datetime import datetime, timedelta

DB_PATH = os.path.join(os.path.dirname(__file__), 'database.db')

def seed_db():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    
    # Base coordinates for Hyderabad, Telangana
    base_lat = 17.3850
    base_lng = 78.4867
    
    # Categories from User Dataset (2025 cases used for weighting)
    # Total cases approx 110,000 for these categories
    crime_data_weights = {
        "MURDER": 781,
        "RAPE": 2549,
        "KIDNAPPING": 1145,
        "ROBBERY": 512,
        "THEFT": 17700,
        "VEHICLE THEFT": 6930,
        "BURGLARY": 5755,
        "CHEATING": 28394,
        "NARCOTICS (NDPS)": 2542,
        "CYBERCRIME": 3500, # Estimated based on trend
        "ROAD ACCIDENT": 24826,
        "MISSING PERSON": 22882,
        "RIOTING": 186
    }
    
    crime_types = list(crime_data_weights.keys())
    weights = list(crime_data_weights.values())
    
    descriptions = [
        "Incident reported near city center.",
        "Investigation ongoing by local police.",
        "Evidence collected at the scene.",
        "Public assistance requested for identification.",
        "Related to recent area trends.",
        "Emergency services responded promptly.",
        "Case filed under relevant sections."
    ]
    
    # Clear existing data
    c.execute('DELETE FROM reports')
    
    # Generate 150 dummy records around Hyderabad
    for _ in range(150):
        ctype = random.choices(crime_types, weights=weights)[0]
        desc = random.choice(descriptions)
        
        # Jitter for a city-wide spread
        lat = base_lat + random.uniform(-0.05, 0.05)
        lng = base_lng + random.uniform(-0.05, 0.05)
        
        days_ago = random.randint(0, 60)
        report_time = datetime.now() - timedelta(days=days_ago, seconds=random.randint(0, 86400))
        
        c.execute('INSERT INTO reports (crime_type, description, lat, lng, report_time) VALUES (?, ?, ?, ?, ?)',
                  (ctype, desc, lat, lng, report_time.strftime('%Y-%m-%d %H:%M:%S')))
                  
    conn.commit()
    conn.close()
    print("Successfully seeded 150 records for Telangana (Hyderabad).")

if __name__ == '__main__':
    seed_db()
