# DOKO Battlefield

> **Building the future of immersive sports through software, AI, IoT, and wearable technology.**

DOKO Battlefield is an immersive sports platform designed to combine physical activity with intelligent technology. The platform integrates athlete registration, event management, wearable telemetry, and real-time safety monitoring into a unified ecosystem.

This repository contains the software powering the DOKO platform, including participant check-in, event management, wearable services, and the first prototype of the **D'AMS (DOKO Adaptive Motion System)**.

---

# Vision

Traditional sports provide competition.

DOKO expands that experience by combining:

- Immersive environments
- Intelligent wearables
- Real-time performance analytics
- Athlete safety monitoring
- Community-driven sporting events

The long-term vision is to create a scalable technology platform capable of supporting recreational, competitive, and educational sporting experiences.

---

# Platform Components

## Client

Web application used by participants, volunteers, and administrators.

Features include:

- Registration
- Check-in
- Event management
- QR Code integration
- Survey collection

---

## Server

Backend API responsible for:

- Authentication
- Event management
- Participant management
- Telemetry routing
- Database communication

---

## D'AMS Service

The DOKO Adaptive Motion System (D'AMS) backend.

Responsibilities include:

- Receiving telemetry from wearable devices
- Motion analysis
- Session tracking
- Safety state calculations
- Device communication

---

## D'AMS Dashboard

Administrative dashboard used to monitor live telemetry.

Features include:

- Live athlete monitoring
- Motion visualization
- Session management
- Device status
- Safety alerts

---

## Necklace Service

Service responsible for participant identification.

Features include:

- QR code generation
- Participant lookup
- Event linking
- Fast check-in support

---

## DOKO Tablet

Tablet application used during live events.

Supports:

- Participant check-in
- QR code scanning
- Sport logging
- Volunteer workflow
- Event operations

---

# Repository Structure

```text
DOKO_Battlefield
│
├── client/
├── server/
├── dams-service/
├── dams-dashboard/
├── necklace-service/
├── doko-tablet/
└── README.md
```

---

# Technology Stack

### Frontend

- React
- JavaScript
- HTML
- CSS

### Backend

- Python
- Flask
- SQLAlchemy
- SQLite

### Embedded Systems

- ESP32
- MPU6050
- Wi-Fi
- REST APIs

### Tools

- Git
- GitHub
- Vercel
- Wokwi

---

# Current Features

- Participant registration
- QR code check-in
- Volunteer event management
- Sport participation tracking
- D'AMS telemetry API
- Motion monitoring
- Dashboard visualization
- Session management

---

# Future Roadmap

- Multi-sport event management
- Live leaderboards
- AI coaching
- Wearable hardware (D'AMS V2)
- Athlete performance analytics
- Mobile applications
- Cloud deployment
- Tournament management

---

# About D'AMS

D'AMS (DOKO Adaptive Motion System) is the wearable technology platform powering DOKO.

The current prototype demonstrates:

- ESP32 communication
- Motion sensing
- Real-time telemetry
- Flask API integration
- Dashboard visualization
- Athlete safety monitoring

Future versions will expand to multi-sensor wearable devices capable of monitoring full-body movement and biometric data during athletic activities.

---

# Status

**Current Version:** Prototype / Active Development

The platform is actively being developed as part of the DOKO Battlefield ecosystem.

---

# Author

**Treneese Johnson**

Software Engineer • Founder • Artist

Portfolio:
https://treneese-engineer-portfolio.vercel.app

LinkedIn:
https://www.linkedin.com/in/treneese-johnson-b55b3926a/
