# 7. SYSTEM TESTING
System testing is a critical phase in the software development life cycle that verifies whether the complete, integrated Detection of Crime Hotspots using Crowdsourced Data system meets the specified functional and non-functional requirements. The objective of this phase is to ensure the system is reliable, accurate, user-friendly, secure, and performs efficiently under real-world conditions.

The testing was carried out in a systematic manner covering multiple levels: Unit Testing, Integration Testing, System Testing, and User Acceptance Testing. Both manual and automated testing approaches were used. Testing was performed on a Windows 11 system with Intel i5 processor, 16 GB RAM, and Python 3.11 environment.

## 7.1 Unit Testing 
Each individual module was tested independently to verify its correctness.
*   **Haversine Module** (Distance calculation logic between GPS coordinates)
*   **Database Module** (SQLite connection, table initialization, and CRUD operations)
*   **Validation Module** (Coordinate range checks and mandatory field validation)
*   **API Controller** (Routing and request handling for Flask endpoints)
*   **Data Processor** (Parsing and sorting of nearby crime reports)

All unit tests passed with 100% success rate using Python’s unittest framework.

## 7.2 Integration Testing
Integration testing verified the interaction between different modules and the frontend-backend communication through Flask APIs.
*   Frontend to FlaskController API calls (Fetch and Post reports)
*   Processing → Haversine Calculation → Filtering flow
*   Parallel execution of Map rendering and Database fetching
*   HistoryManager and SQLite Database integration

All integration points worked seamlessly without data loss or communication errors.

## 7.3 System Testing
End-to-end testing of the complete application was performed to validate the entire workflow from crime reporting to hotspot visualization and proximity analysis. Special focus was given to real-time performance, accuracy of map markers, and user experience.

System testing ensures that the integrated components—the interactive Leaflet map, the Flask backend, and the SQLite database—work together to provide a seamless safety awareness application. The testing verified the full lifecycle of a report from user submission to global heatmap update.

## 7.4 Test Cases
The following table shows representative test cases used during system testing:

| Test ID | Feature Under Test | Input Description | Expected Outcome | Status |
|:--- |:--- |:--- |:--- |:--- |
| TC-01 | Incident Reporting | Valid Lat/Lng, Crime Type 'Theft', Desc | Report saved to DB; Map marker appears | PASSED |
| TC-02 | Proximity Search | Search with 1km radius from user location | Returns only reports within 1km range | PASSED |
| TC-03 | Input Validation | Empty 'Crime Type' field in submission | Error message displayed; DB not updated | PASSED |
| TC-04 | Map Visualization | Multiple reports in a single street | Heatmap shows high-intensity hotspot | PASSED |
| TC-05 | Response Time | Loading 500+ records on map | Map renders pins and heatmap in < 1s | PASSED |
| TC-06 | Persistence | Server restart after submission | Data remains accessible and verified | PASSED |

## 7.5 Performance Testing
*   Average response time for report submission: **0.4 seconds**
*   Maximum response time observed: **0.9 seconds** (under simulated load)
*   System loading time at startup: **0.6 seconds**
*   System handled 50 simultaneous API requests without degradation

## 7.6 Error Handling and Security Testing
*   **Invalid input** (empty fields, non-numeric coordinates) → Proper error messages displayed on UI.
*   **SQL injection attempts** → Blocked by using parameterized queries in all database interactions.
*   **Concurrent Access** → SQLite handles simultaneous writes gracefully using file-based locking.
*   **Browser compatibility** → Tested on Chrome, Firefox, and Edge; all map layers functioned correctly.

### Testing Tools Used
*   **Python unittest framework** for unit testing backend logic.
*   **Postman** for API endpoint testing and payload validation.
*   **Manual testing** for frontend usability and map interactions.
*   **Chrome Developer Tools** for performance monitoring and diagnostic debugging.

All identified issues were resolved during the testing phase. The system is stable, accurate, and ready for deployment.
