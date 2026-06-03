// src/tablet/Confirm.js
import { useLocation, useNavigate } from "react-router-dom";
import "../Kiosk.css";

export default function Confirm() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="confirm-shell">
      <div className="confirm-box">
        <h2 className="confirm-title">You're Checked In!</h2>

        <p className="confirm-label">DOKO Event ID / Code:</p>
        <p className="confirm-code">{state?.qrCode}</p>

        <p className="confirm-note">
          Show this code to DOKO staff before playing archery or fencing.
        </p>

        <button
          className="kiosk-btn primary"
          onClick={() => navigate("/")}
        >
          Check In Another Guest
        </button>
      </div>
    </div>
  );
}
