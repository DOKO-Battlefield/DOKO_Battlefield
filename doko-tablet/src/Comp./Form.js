
// src/Comp/Form.js 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import { termsText, waiverText } from "./Terms";
import "../Kiosk.css";


export default function KioskForm() {
  const [showTerms, setShowTerms] = useState(false);
  const [showWaiver, setShowWaiver] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    username: "",
    age: "",
    participant_type: "participant",
    group: "",
    email: "",
    phone: "",
    guardian_name: "",
    emergency_contact_name: "",
    emergency_contact_phone: "",
    interests: [],
    photos_opt_in: false,
    agreed_terms: false,
    waiver: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

 // kiosk/doko-tablet/src/Comp/Form.js (handleSubmit)
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.agreed_terms || !form.waiver) {
    alert("You must agree to all terms before continuing.");
    return;
  }

  try {
    setSubmitting(true);

    const res = await api.post("/kiosk/checkin", {
  first_name: form.first_name,
  last_name: form.last_name,
  username: form.username,
  age: Number(form.age),
  participant_type: form.participant_type,
  email: form.email,
  phone: form.phone,
  group_name: form.group,
  guardian_name: form.guardian_name,
  emergency_contact_name: form.emergency_contact_name,
  emergency_contact_phone: form.emergency_contact_phone,
  interests: form.interests,
  room_id: 1,
  photos_opt_in: form.photos_opt_in,
  waiver_signed: form.waiver,
  agreed_terms: form.agreed_terms,
});

    const { code, user_id } = res.data;

    navigate("/confirm", {
      state: { qrCode: code, userId: user_id },
    });
  } catch (err) {
    console.error(err);
    alert("Something went wrong checking you in. Please tell a DOKO staff member.");
  } finally {
    setSubmitting(false);
  }
};


  return (
    <div className="kiosk-shell">
      {/* LEFT PANEL – branding / info */}
      <aside className="kiosk-left">
        <div>
          <div className="kiosk-logo">DOKO BATTLEFIELD</div>
          <h1 className="kiosk-title">Detroit Pop-Up Check-In</h1>
          <p className="kiosk-subtitle">
            Get ready to begin your adventure. Free-entry, coach-led
            rotations in archery, fencing, and kendo.
          </p>

          <div className="kiosk-bullets">
            <div>• Safety-first gear & instructors</div>
            <div>• Age 10+ for training rooms</div>
            <div>• DOKO Bar drinks & limited-run merch</div>
          </div>
        </div>

        <div className="kiosk-steps">
          <span className="kiosk-step kiosk-step-active">
            1. Check-In Form
          </span>
          <span className="kiosk-step">2. Scan QR / Necklace</span>
          <span className="kiosk-step">3. Join Your Rotation</span>
        </div>
      </aside>

      {/* RIGHT PANEL – actual form */}
      <main className="kiosk-right">
        <div className="kiosk-card">
          <h2 className="kiosk-card-title">Guest Details</h2>

          <form onSubmit={handleSubmit} className="kiosk-form">
            <div className="k-row">
              <div className="k-field">
                <label>
                  First Name <span>*</span>
                </label>
                <input
                  className="k-input"
                  name="first_name"
                  required
                  value={form.first_name}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              <div className="k-field">
                <label>
                  Last Name <span>*</span>
                </label>
                <input
                  className="k-input"
                  name="last_name"
                  required
                  value={form.last_name}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="k-row">
              <div className="k-field">
                <label>
                  Warrior Name (Username) <span>*</span>
                </label>
                <input
                  className="k-input"
                  name="username"
                  required
                  value={form.username}
                  onChange={handleChange}
                  placeholder="Choose your warrior name"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="k-row">
  <div className="k-field">
    <label>
      Age <span>*</span>
    </label>
    <input
      className="k-input"
      type="number"
      name="age"
      required
      value={form.age}
      onChange={handleChange}
    />
  </div>

  <div className="k-field">
    <label>
      Participant Type <span>*</span>
    </label>

    <select
      className="k-input"
      name="participant_type"
      value={form.participant_type}
      onChange={handleChange}
    >
      <option value="participant">Participant</option>
      <option value="spectator">Spectator</option>
    </select>
  </div>
</div>

            <div className="k-row">
              <div className="k-field">
                <label>Group / Party Name (optional)</label>
                <input
                  className="k-input"
                  name="group"
                  value={form.group}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="k-row">
              <div className="k-field">
                <label>
                  Email <span>*</span>
                </label>
                <input
                  className="k-input"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="k-row">
              <div className="k-field">
                <label>Phone (optional)</label>
                <input
                  className="k-input"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="k-row">
  <div className="k-field">
    <label>
      Emergency Contact Name <span>*</span>
    </label>

    <input
      className="k-input"
      name="emergency_contact_name"
      required
      value={form.emergency_contact_name}
      onChange={handleChange}
    />
  </div>

  <div className="k-field">
    <label>
      Emergency Contact Phone <span>*</span>
    </label>

    <input
      className="k-input"
      name="emergency_contact_phone"
      required
      value={form.emergency_contact_phone}
      onChange={handleChange}
    />
  </div>
</div>

{Number(form.age) < 18 && form.age !== "" && (
  <div className="k-row">
    <div className="k-field">
      <label>
        Parent / Guardian Name <span>*</span>
      </label>

      <input
        className="k-input"
        name="guardian_name"
        required
        value={form.guardian_name}
        onChange={handleChange}
      />
    </div>
  </div>
)}

            <div className="k-checkbox-row">
              <input
                type="checkbox"
                name="waiver"
                checked={form.waiver}
                onChange={handleChange}
                className="k-checkbox"
                required
              />
              <p>
                I understand and accept the risks in the{" "}
                <button
                  type="button"
                  className="terms-link"
                  onClick={() => setShowWaiver(true)}
                >
                  Waiver
                </button>
                .
              </p>
            </div>

            <div className="k-checkbox-row">
              <input
                type="checkbox"
                name="agreed_terms"
                checked={form.agreed_terms}
                onChange={handleChange}
                className="k-checkbox"
                required
              />
              <p>
                I agree to the{" "}
                <button
                  type="button"
                  className="terms-link"
                  onClick={() => setShowTerms(true)}
                >
                  Terms &amp; Agreement
                </button>
                .
              </p>
            </div>

            <div className="k-checkbox-row">
              <input
                type="checkbox"
                name="photos_opt_in"
                checked={form.photos_opt_in}
                onChange={handleChange}
                className="k-checkbox"
              />
              <p>📸 Yes, send me the photos I take today!</p>
            </div>

            <button
              type="submit"
              className="k-button-primary"
              disabled={submitting}
            >
              {submitting ? "Checking In..." : "Scan QR / Tap Necklace to Finish"}
            </button>
          </form>
        </div>
      </main>

      {/* ONE clean modal overlay for terms / waiver */}
      {(showTerms || showWaiver) && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              onClick={() => {
                setShowTerms(false);
                setShowWaiver(false);
              }}
              className="modal-close"
            >
              ✖
            </button>
            <pre className="modal-text">
              {showTerms ? termsText : waiverText}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
