function DetectionTable() {
  return (
    <div className="table-card">

      <h3>Recent Detections</h3>

      <table>

        <thead>

          <tr>
            <th>Object</th>
            <th>Confidence</th>
            <th>Time</th>
          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Person</td>
            <td>92%</td>
            <td>10:24 AM</td>

          </tr>

          <tr>

            <td>Car</td>
            <td>88%</td>
            <td>10:23 AM</td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default DetectionTable;