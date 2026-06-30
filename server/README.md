# DOKO Server

The DOKO Server is the central backend powering the DOKO Battlefield platform. It provides the APIs, business logic, database management, and communication layer for every DOKO application and service.

---

# Purpose

The server acts as the brain of the DOKO ecosystem, connecting the website, tablet application, wearable technology, media systems, and event management into a single platform.

---

# Core Systems

## Authentication

- User registration
- Login
- Session management

---

## Event Management

- Event creation
- Event scheduling
- Participant registration
- Event summaries

---

## Kiosk System

- Participant check-in
- QR code validation
- Attendance tracking

---

## Sport Management

- Sport participation logging
- Athlete activity tracking
- Session management

---

## Media Vault

- Media upload
- Folder management
- File downloads
- Media organization

---

## Restaurant System

- Menu management
- Menu categories
- Item management

---

## Community Features

- Contact submissions
- Newsletter signup
- Waiting list management
- Claims system
- FAQ management

---

## Hardware Integration

- Necklace communication
- Hardware API utilities
- Device triggers

---

# Technology Stack

### Backend

- Python
- Flask
- Flask-RESTX
- SQLAlchemy

### Database

- SQLite

### APIs

- REST API
- JSON

---

# Project Structure

```text
server/
│
├── models/
├── routes/
├── utils/
├── migrations/
├── instance/
├── app.py
├── config.py
├── seed.py
└── requirements.txt
```

---

# Major API Modules

- Authentication
- Events
- Kiosk
- QR Codes
- Sessions
- Sport Play Logs
- Media
- Restaurant Menu
- Contact
- Newsletter
- Waiting List
- Claims
- FAQ

---

# Connected Applications

- DOKO Client
- DOKO Tablet
- Necklace Service
- D'AMS Service
- D'AMS Dashboard

---

# Current Status

Prototype / Active Development

The server continues to expand as new DOKO services and platform capabilities are developed.

---

# Future Development

- Cloud deployment
- Authentication enhancements
- Mobile API support
- AI services
- Analytics
- Tournament management
- Expanded wearable integration
