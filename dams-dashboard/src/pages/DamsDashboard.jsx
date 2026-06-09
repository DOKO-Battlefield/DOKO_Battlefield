import { useEffect, useState } from "react";
import "../App.css";

const API = "http://127.0.0.1:5556";
const ACTIVE_SESSION_ID = "SESSION-035B7750";

function DamsDashboard() {
  const [overview, setOverview] = useState(null);
  const [live, setLive] = useState(null);
  const [stats, setStats] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [telemetry, setTelemetry] = useState([]);

  async function fetchDamsData() {
    const [overviewRes, liveRes, statsRes, alertsRes, sessionsRes, telemetryRes] =
      await Promise.all([
        fetch(`${API}/dashboard/overview`),
        fetch(`${API}/dashboard/live`),
        fetch(`${API}/dashboard/stats`),
        fetch(`${API}/dashboard/alerts`),
        fetch(`${API}/sessions/all`),
        fetch(`${API}/telemetry/all`),
      ]);

    setOverview(await overviewRes.json());
    setLive(await liveRes.json());
    setStats(await statsRes.json());
    setAlerts(await alertsRes.json());
    setSessions(await sessionsRes.json());
    setTelemetry(await telemetryRes.json());
  }

  async function endSession() {
    await fetch(`${API}/sessions/${ACTIVE_SESSION_ID}/end`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    fetchDamsData();
  }

  useEffect(() => {
    fetchDamsData();
    const interval = setInterval(fetchDamsData, 2000);
    return () => clearInterval(interval);
  }, []);

  const stateClass =
    live?.state === "STOP" ? "stop" : live?.state === "SLOW" ? "slow" : "normal";

  const activeSession = sessions.find(
    (session) => session.session_id === ACTIVE_SESSION_ID
  );

  return (
    <div className="dams-dashboard">
      <header className="command-header">
        <div>
          <h1>D’AMS Command Center</h1>
          <p>Adaptive Motion + Safety Intelligence System</p>
        </div>

        <div className="session-meta">
          <p>Device: DAMS001</p>
          <p>Session: {ACTIVE_SESSION_ID}</p>
          <p>Status: {activeSession?.status || "UNKNOWN"}</p>
        </div>
      </header>

      <section className={`state-card ${stateClass}`}>
        <h2>Current State</h2>
        <h3>{live?.state || "NO DATA"}</h3>
        <p>Heart Rate: {live?.heart_rate ?? "--"} BPM</p>
        <p>Motion Score: {live?.motion_score ?? "--"}</p>
        <p>Fatigue Score: {live?.fatigue_score ?? "--"}</p>

        <button className="end-button" onClick={endSession}>
          End Session
        </button>
      </section>

      <section className="grid">
        <div className="panel">
          <h2>Overview</h2>
          <p>Total Sessions: {overview?.total_sessions ?? 0}</p>
          <p>Total Telemetry: {overview?.total_telemetry ?? 0}</p>
          <p>Active Sessions: {overview?.active_sessions ?? 0}</p>
        </div>

        <div className="panel">
          <h2>Stats</h2>
          <p>Highest Heart Rate: {stats?.highest_heart_rate ?? 0}</p>
          <p>Highest Motion Score: {stats?.highest_motion_score ?? 0}</p>
          <p>Slow Events: {stats?.slow_events ?? 0}</p>
          <p>Stop Events: {stats?.stop_events ?? 0}</p>
        </div>
      </section>

      <section className="panel">
        <h2>Alerts</h2>
        {alerts.length === 0 ? (
          <p>No active alerts.</p>
        ) : (
          alerts.map((alert, index) => (
            <div className="alert" key={index}>
              <strong>{alert.session_id}</strong>
              <p>{alert.reason}</p>
              <p>Heart Rate: {alert.heart_rate}</p>
            </div>
          ))
        )}
      </section>

      <section className="panel">
        <h2>Session History</h2>
        <table>
          <thead>
            <tr>
              <th>Session</th>
              <th>Status</th>
              <th>Latest State</th>
              <th>Telemetry</th>
              <th>Slow</th>
              <th>Stop</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr key={session.session_id}>
                <td>{session.session_id}</td>
                <td>{session.status}</td>
                <td>{session.latest_state}</td>
                <td>{session.telemetry_count}</td>
                <td>{session.summary?.slow_events}</td>
                <td>{session.summary?.stop_events}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="panel">
        <h2>Telemetry Log</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Heart Rate</th>
              <th>Motion</th>
              <th>Fatigue</th>
              <th>State</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {telemetry.slice(0, 10).map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.heart_rate}</td>
                <td>{item.motion_score}</td>
                <td>{item.fatigue_score}</td>
                <td>{item.state}</td>
                <td>{item.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default DamsDashboard;