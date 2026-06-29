import { useEffect, useState } from "react";
import { getDashboard } from "../../services/dashboardService";

function DetectionHistory() {

  const [history, setHistory] = useState([]);

  useEffect(() => {

  loadHistory();

  const interval = setInterval(() => {

    loadHistory();

  }, 2000);

  return () => clearInterval(interval);

}, []);
  const loadHistory = async () => {
    try {
      const data = await getDashboard();
      setHistory(data.history);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="history-card">

      <div className="card-header">
        <h3>Recent Detection History</h3>
      </div>

      <table className="history-table">

        <thead>

          <tr>

            <th>Object</th>

            <th>Confidence</th>

            <th>Time</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {history.map((item, index) => (

            <tr key={index}>

              <td>{item.object}</td>

              <td>{item.confidence}%</td>

              <td>{item.time}</td>

              <td>

                <span className="status-badge">
                  {item.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default DetectionHistory;