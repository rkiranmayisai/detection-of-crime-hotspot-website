# 3. REQUIREMENT ANALYSIS

## 3.1 Software Requirements

### Operating System
The **Detection of Crime Hotspots using Crowdsourced Data** system supports major operating systems including Windows 10/11, macOS (Ventura and above), and Ubuntu Linux (20.04 LTS and above). The system is built as a highly responsive web application, allowing citizens and administrators to access the heatmap, report incidents, and perform radius scans through any modern web browser. This cross-platform approach ensures that public safety data is accessible across diverse devices without the need for platform-specific installations.

### Programming Language
The system is primarily developed using **Python 3.10 or higher**. Python was selected due to its robust library support for spatial calculations (Haversine formula), lightweight backend development (Flask), and ease of integration with database systems. It allows for efficient processing of geographic coordinates and seamless communication between the backend logic and the interactive mapping frontend.

### Install Python
Before setting up the project, Python must be installed on the system.

#### Download and Install Python
1. Visit the official Python website: [https://www.python.org/downloads/](https://www.python.org/downloads/)
2. Download the latest stable version (Python 3.11 or 3.12 recommended).
3. Choose the appropriate installer:
    - **Windows**: .exe installer (Select **"Add Python to PATH"** during installation).
    - **macOS**: .pkg installer.
    - **Linux**: Use the system package manager.
      ```bash
      sudo apt update && sudo apt install python3 python3-pip python3-venv -y
      ```

#### Verify Python Installation
Open Command Prompt (Windows) or Terminal (macOS/Linux) and run:
```bash
python --version 
# or 
python3 --version
```
The output should show **Python 3.10 or higher**.

### Set Up a Virtual Environment
A virtual environment isolates project dependencies, ensuring that the Flask web server and spatial libraries do not conflict with other system-wide Python packages.

#### Steps to Create and Activate Virtual Environment
1. **Create a virtual environment**:
   ```bash
   python -m venv venv
   ```
   *(This creates a folder named `venv` in the project directory.)*

2. **Activate the virtual environment**:
    - **Windows**:
      ```bash
      .\venv\Scripts\activate
      ```
    - **macOS / Linux**:
      ```bash
      source venv/bin/activate
      ```
Once activated, your terminal prompt will show `(venv)` at the beginning.

### Install Required Packages
The following Python and JavaScript libraries are used in the project:

| Package / Library | Purpose | Installation Command / Source |
| :--- | :--- | :--- |
| **flask** | Web framework for backend API development. | `pip install flask` |
| **flask-cors** | Enables secure cross-origin requests for the web UI. | `pip install flask-cors` |
| **sqlite3** | Built-in module for persistent data storage. | Pre-installed with Python |
| **Leaflet.js** | Interactive mapping engine for hotspot visualization. | CDN: `unpkg.com/leaflet` |
| **Leaflet-Heat** | Plugin for rendering density-based heatmaps. | CDN: `unpkg.com/leaflet.heat` |
| **Inter (Google Font)** | Premium typography and modern interface design. | Google Fonts API |

#### Verify Installation
After installing Python packages, run:
```bash
pip list
```
You should see `Flask` and `Flask-CORS` listed in the output.

### Web Framework
The system utilizes **Flask** as the backend framework. Flask's lightweight architecture is ideal for handling rapid API requests such as coordinate lookups and history retrieval. It processes incoming JSON reports from the frontend, validates geographic data, and interfaces with the SQLite database to store and retrieve incidents.

### Database System
The system uses **SQLite** (file-based relational database) by default. It is chosen for its simplicity in local deployments and lack of overhead. It stores:
- **ID**: Primary key for incident tracking.
- **Crime Type**: Categorical data (Theft, Assault, etc.).
- **Location**: Latitude and Longitude (REAL/Float).
- **Metadata**: Timestamps and user-provided descriptions.
For large-scale city-wide deployments, the system can be easily migrated to **PostgreSQL with PostGIS** for advanced spatial indexing.

---

## 3.2 Hardware Requirements

### Processor (CPU)
A modern processor is required to handle the mathematical overhead of spatial distance calculations and the concurrent serving of map data.
- **Minimum**: Intel Core i5 (8th Generation) or AMD Ryzen 5.
- **Recommended**: Intel Core i7 (10th Generation or higher) or AMD Ryzen 7.
- **Why it matters**: The radius search feature uses the Haversine formula to calculate distances between the user's click and every record in the database. A faster CPU ensures that even with thousands of records, results are returned in milliseconds.

### Memory (RAM)
RAM affects the speed of data retrieval and the smoothness of the interactive map rendering in the browser.
- **Minimum**: 8 GB RAM.
- **Recommended**: 16 GB RAM.
- **Why it matters**: Loading high-density heatmaps and maintaining the Python Flask server simultaneously requires sufficient memory to prevent system lag.

### Storage
Fast storage is necessary for quick database read/write operations and fast loading of project assets.
- **Minimum**: 256 GB SSD.
- **Recommended**: 512 GB SSD or higher.
- **Why it matters**: SSDs significantly reduce the latency of the SQLite database operations, especially when appending new crowdsourced reports while simultaneously querying for history.

### Internet Connection
A stable connection is required to fetch map tiles (OpenStreetMap) and load external libraries.
- **Minimum**: 5 Mbps stable connection.
- **Recommended**: 15 Mbps or higher.
- **Why it matters**: Since map tiles are served via third-party providers (OSM/Leaflet), a reliable connection is essential for a fluid map browsing experience.

---

## 3.3 Functional Requirements

### Interactive Map Interface
The system must provide a full-screen interactive map that allows users to pan, zoom, and interact with geographic regions. It must automatically load historical crime data and display it as a color-coded heatmap based on incident density.

### Crowdsourced Reporting System
The system must allow any user to report an incident by:
1. Selecting a location directly on the map.
2. Choosing a crime category from a predefined list (Theft, Assault, Vandalism, etc.).
3. Providing an optional description of the event.
4. Submitting the data to the backend for real-time storage.

### Spatial Radius Search (Area Scan)
The system must allow users to click any point on the map to scan the immediate surroundings.
- **Action**: Trigger a search within a 500-meter radius.
- **Output**: A list of all historical and crowdsourced incidents within that radius, sorted by proximity to the clicked point.

### Heatmap Visualization
The system must dynamically generate a heatmap layer. Higher concentrations of crime reports in a specific area must appear in "hot" colors (red/orange), while lower concentrations appear in "cool" colors (blue/green).

### History Tracking and Management
The system must maintain a persistent log of all reported crimes. Administrators and users should be able to see the growth of hotspots over time through the map interface, ensuring transparency and data-driven awareness.

---

## 3.4 Non-Functional Requirements

### Scalability
The system architecture must be modular to support future growth, such as adding user authentication, multi-city support, or integration with external police department databases.

### Performance
The application must be optimized for speed.
- **Map Load Time**: Under 2 seconds on a standard connection.
- **Search Latency**: Coordinate queries (Radius Scan) must return results in under 500ms.

### Reliability
The system must ensure high availability. Reports submitted by users should be written to the database immediately to prevent data loss in case of browser crashes or network interruptions.

### Security and Data Integrity
- **CORS Protection**: Secure the API to prevent unauthorized domains from submitting fake reports.
- **Input Sanitization**: Filter all user-provided descriptions to prevent Cross-Site Scripting (XSS) or SQL Injection.
- **Validation**: Ensure all reported coordinates are valid geographic points (Lat -90 to 90, Lng -180 to 180).

### Usability (User Experience)
The interface must follow modern design principles, utilizing a **Glassmorphism** theme and **Dark Mode** for a premium feel. The map controls must be intuitive, making the tool accessible to senior citizens and students alike without formal training.

### Portability
The system must be fully responsive, ensuring optimal viewing and interaction on desktops, tablets, and smartphones.
