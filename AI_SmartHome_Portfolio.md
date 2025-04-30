
# 🏠 AI-Based Smart Home Monitoring System
**Contributor:** Vinay Kumar Goud Jagiri  
**Date:** May 2025  
**GitHub Repository:** [github.com/VinayGoudJ/SmartHomeMonitorSystem_FinalCode](https://github.com/VinayGoudJ/SmartHomeMonitorSystem_FinalCode)

---

## 🔹 Project Overview  
This is a full-stack smart home monitoring system that integrates **real-time motion detection**, **cloud-based alerting**, and a **modern SharePoint dashboard**. My core contribution was building the backend-to-cloud pipeline and the UI interface that visualizes live security activity.

---

## 🔹 My Contributions  
- Developed a Python-based motion detection app using OpenCV to trigger live alerts.
- Integrated Power Automate flows to receive HTTP POST requests, log events, send email/SMS alerts, and upload images to SharePoint.
- Built a responsive React-based SPFx web part (dashboard) using Fluent UI and Chart.js.
- Designed SharePoint Lists and document libraries to store motion logs and images.
- Configured ThingSpeak (optional) for IoT event simulation and condition-based automation.
- Automated anomaly handling and data filtering via Power Automate JSON parsing and conditional logic.

---

## 🔹 Sprint Summary Table

| Sprint | Goal                              | Highlights                                              |
|--------|-----------------------------------|----------------------------------------------------------|
| 1      | Environment Setup & MVP           | Python detector, Power Automate POST flow, SharePoint lists |
| 2      | Dashboard UI + CRUD Operations    | SPFx web part, motion entry form, recent event list       |
| 3      | Charts & Visualization            | Line chart, pie chart, bar chart for sensor data          |
| 4      | Flow Integration + Image Upload   | Alert system, image uploads via base64 to SharePoint      |
| 5      | Final Enhancements & Demo         | Error handling, layout polish, live demo walkthrough      |

---

## 🔹 Summary of Key Stories / Tasks

| Task | Description | Status |
|------|-------------|--------|
| 🛠️ Setup Dev Environment | Installed Node, SPFx, PowerShell, Python, OpenCV | ✅ |
| 📸 Motion Detection | Built Python script with webcam + motion sensing | ✅ |
| 🌐 Flow Integration | Created HTTP-triggered Power Automate flow | ✅ |
| 🗂️ SharePoint Integration | Logged data + images to SharePoint Lists and Docs | ✅ |
| 📊 Dashboard UI | SPFx web part with PivotTabs and charts | ✅ |
| 🧪 Testing & Alerts | Configured ThingSpeak and real-time alert testing | ✅ |

---

## 🔹 Screenshots

### 📸 Motion Detection Trigger (Python → Power Automate)
![Motion Trigger](https://github.com/VinayGoudJ/SmartHomeMonitorSystem_FinalCode/blob/main/screenshots/motion_trigger.png)

### 📊 Smart Home Dashboard (SPFx)
![Dashboard](https://github.com/VinayGoudJ/SmartHomeMonitorSystem_FinalCode/blob/main/screenshots/dashboard_ui.png)

### 📨 Email Alert & SharePoint Log
![Email + Logs](https://github.com/VinayGoudJ/SmartHomeMonitorSystem_FinalCode/blob/main/screenshots/email_log.png)

---

## 🔹 Code Repository  
The full source code is available on GitHub:  
🔗 [SmartHomeMonitorSystem_FinalCode](https://github.com/VinayGoudJ/SmartHomeMonitorSystem_FinalCode)

---

## 🔹 Appendix (Commits, Flow JSONs, Extra Stories)
📄 [View All Commits](https://github.com/VinayGoudJ/SmartHomeMonitorSystem_FinalCode/commits/main)  
📁 Power Automate Flows & Assets: `/flows/`  
📁 SPFx Code: `/src/webparts/SmartHomeDashboard/`  

---

## 📌 Final Note  
This project demonstrates my ability to build real-world, cloud-connected, intelligent systems using Microsoft technologies and open-source tools. It reflects hands-on skills in automation, web development, low-code flows, and problem-solving.
