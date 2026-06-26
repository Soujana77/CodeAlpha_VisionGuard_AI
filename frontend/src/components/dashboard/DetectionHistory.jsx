const history = [
  {
    object: "Person",
    confidence: "98%",
    time: "10:15 AM",
    status: "Detected",
  },
  {
    object: "Car",
    confidence: "95%",
    time: "10:18 AM",
    status: "Detected",
  },
  {
    object: "Truck",
    confidence: "93%",
    time: "10:22 AM",
    status: "Detected",
  },
  {
    object: "Dog",
    confidence: "89%",
    time: "10:28 AM",
    status: "Detected",
  },
  {
    object: "Bicycle",
    confidence: "92%",
    time: "10:31 AM",
    status: "Detected",
  },
];

function DetectionHistory() {
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
              <td>{item.confidence}</td>
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