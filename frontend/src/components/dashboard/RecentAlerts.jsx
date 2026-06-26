import { FiAlertTriangle } from "react-icons/fi";

const alerts = [
  {
    object: "Person",
    location: "Entrance Gate",
    time: "10:24 AM",
    level: "High",
  },
  {
    object: "Vehicle",
    location: "Parking Area",
    time: "10:18 AM",
    level: "Medium",
  },
  {
    object: "Package",
    location: "Reception",
    time: "09:57 AM",
    level: "Low",
  },
];

function RecentAlerts() {
  return (
    <div className="alerts-card">
      <div className="card-header">
        <h3>Recent Alerts</h3>
      </div>

      <div className="alerts-list">
        {alerts.map((alert, index) => (
          <div className="alert-item" key={index}>
            <div className="alert-icon">
              <FiAlertTriangle />
            </div>

            <div className="alert-content">
              <h4>{alert.object}</h4>
              <p>{alert.location}</p>
              <span>{alert.time}</span>
            </div>

            <div className={`alert-level ${alert.level.toLowerCase()}`}>
              {alert.level}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentAlerts;