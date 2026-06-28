import { useEffect, useState } from "react";
import { getHistory } from "../../services/historyService";

function SessionTable() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const response = await getHistory();
      setHistory(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="report-section">
      <h2>Session Reports</h2>

      <table className="session-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Source</th>
            <th>Objects</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {history.length === 0 ? (
            <tr>
              <td colSpan="4">No reports available.</td>
            </tr>
          ) : (
            history.map((item) => (
              <tr key={item.id}>
                <td>{item.timestamp}</td>
                <td>{item.source}</td>
                <td>{item.object_count}</td>
                <td>
                  <span className="completed-badge">
                    Completed
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SessionTable;