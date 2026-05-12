import { useNavigate } from "react-router-dom";
import "../Kiosk.css";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-shell">
      <div className="welcome-box">
        <h1 className="welcome-title">Welcome to DOKO Battlefield</h1>
        <p className="welcome-sub">Get ready to begin your adventure</p>

        <button
          onClick={() => navigate("/form")}
          className="kiosk-btn primary"
        >
          Start Check-In
        </button>
      </div>
    </div>
  );
}

