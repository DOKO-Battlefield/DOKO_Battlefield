# D'AMS Service

The D'AMS (DOKO Adaptive Motion System) Service is the backend responsible for receiving, processing, and managing real-time telemetry data from wearable devices.

It serves as the communication layer between D'AMS hardware, the DOKO platform, and the D'AMS Dashboard.

---

# Purpose

The D'AMS Service enables real-time athlete monitoring by collecting telemetry from wearable devices and providing data to connected applications for visualization, analysis, and future safety features.

---

# Current Prototype (V1)

The first prototype demonstrates end-to-end communication between wearable hardware and the DOKO platform.

Current capabilities include:

- ESP32 communication
- Motion telemetry
- HTTP API
- Session management
- Dashboard integration
- Real-time data transmission

---

# Responsibilities

## Telemetry

- Receive wearable data
- Validate incoming requests
- Process telemetry
- Store session information

---

## Session Management

- Start sessions
- End sessions
- Retrieve session history

---

## Device Communication

- ESP32 connectivity
- HTTP communication
- JSON payload processing

---

## Dashboard Integration

- Live telemetry updates
- Session visualization
- Athlete monitoring support

---

# Technology Stack

### Backend

- Python
- Flask

### Hardware

- ESP32
- MPU6050

### Communication

- REST API
- HTTP
- JSON

---

# Project Structure

```text
dams-service/
│
├── app.py
├── routes/
├── services/
├── models/
├── utils/
├── requirements.txt
└── README.md
```

---

# API Features

- Health endpoint
- Telemetry endpoint
- Start session
- End session
- Session history
- Live telemetry retrieval

---

# Connected Applications

- D'AMS Dashboard
- DOKO Server
- ESP32 Wearable Devices

---

# Current Status

Prototype V1

This version validates the complete telemetry pipeline from wearable hardware to the software platform. Future versions will expand hardware capabilities, analytics, and athlete safety features.

---

# Future Development

- Multi-device support
- Heart rate monitoring
- Multi-sensor fusion
- Live safety alerts
- Athlete performance analytics
- Cloud deployment
- AI-assisted motion analysis