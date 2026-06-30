# Necklace Service

The Necklace Service manages participant identification throughout the DOKO platform using unique QR codes assigned to wearable DOKO necklaces.

It serves as the connection between a participant's identity and every interaction they have during an event.

---

# Purpose

The Necklace Service provides fast, reliable participant identification, allowing athletes and guests to move through DOKO experiences without repeatedly entering personal information.

Each participant receives a unique QR code that can be scanned throughout the event.

---

# Current Prototype (V1)

The current implementation supports QR code generation and participant identification for DOKO events.

Current capabilities include:

- QR code generation
- Participant identification
- Event registration lookup
- Fast check-in support

---

# Features

## Participant Identification

- Unique participant IDs
- QR code generation
- QR code validation

---

## Event Integration

- Event registration lookup
- Check-in support
- Attendance tracking

---

## Platform Integration

- Connects participant records
- Supports kiosk operations
- Enables activity tracking across the DOKO platform

---

# Technology Stack

### Backend

- Python
- Flask

### Communication

- REST API
- JSON

---

# Project Structure

```text
necklace-service/
│
├── app.py
├── routes/
├── services/
├── models/
├── utils/
└── README.md
```

---

# Connected Applications

- DOKO Server
- DOKO Tablet
- DOKO Client

---

# Workflow

1. Participant registers
2. Unique QR code is generated
3. QR code is assigned to a DOKO necklace
4. QR code is scanned during check-in
5. Participant activities are linked to their unique ID throughout the event

---

# Current Status

Prototype V1

The Necklace Service establishes the participant identification system for the DOKO platform and lays the foundation for future wearable integration.

---

# Future Development

- NFC support
- Reusable participant profiles
- Secure digital credentials
- Wearable device integration
- Expanded event tracking
- Cross-event participant history