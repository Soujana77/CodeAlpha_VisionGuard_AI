import { useEffect, useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";

import { getDashboard } from "../../services/dashboardService";

function RecentAlerts() {

  const [alerts, setAlerts] = useState([]);

  useEffect(() => {

  loadAlerts();

  const interval = setInterval(() => {

    loadAlerts();

  }, 2000);

  return () => clearInterval(interval);

}, []);

  const loadAlerts = async () => {
    try {

      const data = await getDashboard();

      setAlerts(data.alerts);

    } catch (err) {

      console.error(err);

    }
  };

  return (

    <div className="alerts-card">

      <div className="card-header">

        <h3>Recent Alerts</h3>

      </div>

      <div className="alerts-list">

        {alerts.length === 0 ? (

          <p>No alerts detected.</p>

        ) : (

          alerts.map((alert, index) => (

            <div
              className="alert-item"
              key={index}
            >

              <div className="alert-icon">

                <FiAlertTriangle />

              </div>

              <div className="alert-content">

                <h4>{alert.object}</h4>

                <p>{alert.source}</p>

                <span>{alert.time}</span>

              </div>

              <div
                className={`alert-level ${alert.level.toLowerCase()}`}
              >

                {alert.level}

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );

}

export default RecentAlerts;