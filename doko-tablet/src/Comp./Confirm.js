// src/tablet/Confirm.js
import { useLocation } from "react-router-dom";
import "../Kiosk.css";

export default function Confirm() {
  const { state } = useLocation();

  return (
    <div className="confirm-shell">
      <div className="confirm-box">
        <h2 className="confirm-title">You're Checked In!</h2>

        <p className="confirm-label">Necklace ID / QR Code:</p>
        <p className="confirm-code">{state?.qrCode}</p>

        <p className="confirm-note">
          Keep your necklace on. It will be the key to your journey!
        </p>
      </div>
    </div>
  );
}
