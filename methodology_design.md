# 4.1 Methodology
The methodology adopted for the Detection of Crime Hotspots using Crowdsourced Data system follows a structured, spatial-data-driven, and modular development approach. It is designed to build an intelligent, accurate, and user-friendly public safety solution for community awareness. The development process emphasizes high spatial accuracy, real-time map performance, scalability, and ease of deployment. The entire methodology is divided into the following major phases:

### Requirement Analysis
The development began with a detailed study of the limitations in traditional crime reporting. Official crime statistics are often delayed or inaccessible to the general public in real-time. The key requirements identified include real-time crowdsourced reporting, spatial heatmap visualization, localized proximity scans (radius search), and persistent history tracking. These requirements formed a strong foundation for a community-driven safety ecosystem.

### System Design
A modular and layered architecture was adopted to ensure maintainability and easy future enhancements. The system is divided into two primary layers:
*   **Frontend Layer:** Built with HTML, CSS, and JavaScript, leveraging the Leaflet.js engine to provide a premium, interactive mapping experience with real-time feedback.
*   **Backend Layer:** Developed using Python and Flask to handle API requests, coordinate validation, spatial distance calculations (Haversine logic), and database CRUD operations.

### Data Collection and Integration
The system integrates two primary data streams:
*   **Historical Data:** Existing datasets containing verified past incidents (e.g., historical city crime logs).
*   **Crowdsourced Data:** Real-time reports submitted by active users of the platform. Before visualization, submitted data undergoes validation to ensure geographic coordinates are within valid bounds and crime categories are correctly classified.

### Spatial Logic and Algorithm Development
The core of the system is the Spatial Query Engine. Unlike standard text-search systems, this module uses geographic mathematics:
*   **Haversine Formula:** Implemented in Python to calculate distances between user-selected map coordinates and database records.
*   **Radius Search Logic:** A specialized pipeline that filters and sorts incidents occurring within a 500-meter threshold of a user's location.
*   **Density Mapping:** Integration of the Leaflet-Heat algorithm to transform raw coordinates into weighted heatmaps for the UI.

### Interface Development
The user interface was developed with a focus on modern Glassmorphism and Dark Mode aesthetics. It supports:
*   A full-screen interactive map with zoom/pan capabilities.
*   A floating action panel for context-sensitive reporting and analysis.
*   Instant display of nearby incidents with color-coded markers and risk summaries.
*   Mobile-responsive navigation for on-the-go reporting.

### Testing and Validation
Comprehensive testing was performed across multiple stages:
*   **Unit Testing:** Verified the accuracy of the Haversine distance formula against known geographic benchmarks.
*   **Integration Testing:** Ensured that a submitted report through the UI is immediately visible on the map after a horizontal refresh.
*   **Performance Testing:** Validated that spatial queries on thousands of records return results in under 500ms.
*   **Edge-Case Testing:** Handled inputs with invalid coordinates, empty descriptions, or report submissions outside of the supported geographic region.

### Deployment
The system is deployed as a local web application using the Flask development server, with a configuration ready for cloud platforms such as Render or AWS. During deployment, SQLite is initialized for persistence, and CORS is configured to allow secure cross-origin communication between the frontend map and the backend API.

# 4.2 System Modules
The Detection of Crime Hotspots system is designed with a modular architecture to ensure high maintainability and ease of future enhancements. The major modules are as follows:

1. **Map Interaction Module**
   This module serves as the primary visual entry point. Built on the Leaflet.js framework, it manages all geographic interactions, including map tiles, zooming, panning, and coordinate capturing. It detects when a user clicks on the map to either set a report location or trigger a radius scan, ensuring seamless interactivity.

2. **Incident Reporting Module**
   This module provides the frontend interface for crowdsourcing. It manages the submission form, including crime type selection, optional descriptions, and the auto-capture of latitude/longitude coordinates from the map. It performs client-side validation before forwarding the payload to the API.

3. **Spatial Query Module**
   The core intelligence of the backend. This module implements the Haversine Algorithm to calculate the distance between a target point and existing database records. It filters results based on a predefined radius (e.g., 500m) and returns a sorted list of proximity-matched incidents.

4. **Heatmap Generation Module**
   This module is responsible for the visual representation of "hotspots." It processes raw incident coordinates and applies a Kernel Density Estimation (KDE) using the Leaflet-Heat plugin. It maps high-density areas to "hotter" colors (Red/Orange) to visually highlight dangerous zones on the map.

5. **API Communication Module**
   This backend module manages secure RESTful API endpoints (built with Flask). It exposes endpoints like /api/reports for data submission and /api/reports/nearby for spatial queries. It handles JSON serialization and ensures the frontend can communicate efficiently with the Python logic.

6. **Database Management Module**
   This module handles all persistent storage operations using SQLite. It ensures data integrity when saving new reports and optimizes retrieval queries. It manages the reports schema, including primary keys, timestamps, and geographic types.

7. **History Tracking Module**
   Responsible for managing the audit trail of reports. It allows users to view a persistent list of past incidents in an area, providing context for the heatmap. It stores timestamps to ensure that the visualization reflects both historical data and real-time crowdsourced trends.

8. **UI/UX Styling Module**
   A dedicated layer for the application’s aesthetic and responsiveness. It utilizes Vanilla CSS3 with modern features like Glassmorphic transparency, CSS Grid for layout, and Inter-family typography. This module ensures that the complex mapping data is presented in a clean, professional, and accessible format.
