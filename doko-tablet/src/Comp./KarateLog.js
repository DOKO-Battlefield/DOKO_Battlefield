// src/tablet/KarateLog.js
import { useState } from "react";
import api from "../utils/api";
import "../Kiosk.css";

export default function KarateLog() {
  const [code, setCode] = useState("");
  const [staffNote, setStaffNote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
   const sport = "karate";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!code.trim()) {
      setMessage("Please enter the guest code.");
      return;
    }

    try {
  setSubmitting(true);

  const payload = {
  code: code.trim(),
  sport,
  staff_note: staffNote,
};

  console.log("Sending play log:", payload);

  const res = await api.post("/api/kiosk/play-log", payload);

  console.log("Play log response:", res.data);

  setMessage(`Karate session logged.`);
  setCode("");
  setStaffNote("");
} catch (err) {
  console.error("SPORT LOG ERROR:", err.response?.data || err.message);

  setMessage(
    err.response?.data?.error ||
    err.response?.data?.message ||
    "Could not log play. Check the code and try again."
  );
} finally {
  setSubmitting(false);
}
  };

  return (
    <div className="confirm-shell">
      <div className="confirm-box">
        <h2 className="confirm-title">Welcome to Karate</h2>
        <h3>Please Check-In</h3>

        <form onSubmit={handleSubmit} className="kiosk-form">
          <div className="k-field">
            <label>DOKO Event ID / Code</label>
            <input
              className="k-input"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="DOKO-1-123456789"
            />
          </div>

          {/* <div className="k-field">
            <label>Sport</label>
            <select
              className="k-input"
              value={sport}
              onChange={(e) => setSport(e.target.value)}
            >
              <option value="archery">Archery</option>
              <option value="fencing">Fencing</option>
            </select>
          </div> */}

          <div className="k-field">
            <label>Staff Note Optional</label>
            <input
              className="k-input"
              value={staffNote}
              onChange={(e) => setStaffNote(e.target.value)}
              placeholder="Example: second round, group A"
            />
          </div>

          <button className="k-button-primary" disabled={submitting}>
            {submitting ? "Logging..." : "Log Karate"}
          </button>
        </form>

        {message && <p className="confirm-note">{message}</p>}
      </div>
    </div>
  );
}