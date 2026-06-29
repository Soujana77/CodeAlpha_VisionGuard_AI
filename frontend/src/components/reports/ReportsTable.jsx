import {
  FiEye,
  FiFileText,
  FiDownload,
} from "react-icons/fi";

function ReportsTable({
  reports,
  onView,
  onPDF,
  onCSV,
}) {
  return (
    <div className="reports-table-container">

      <table className="reports-table">

        <thead>

          <tr>

            <th>Report ID</th>

            <th>Source</th>

            <th>Detection Date</th>

            <th>Objects</th>

            <th>Status</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {reports.length === 0 ? (

            <tr>

              <td
                colSpan="6"
                className="no-data"
              >

                No reports available.

              </td>

            </tr>

          ) : (

            reports.map((report) => (

              <tr key={report.id}>

                <td>

                  <span className="report-id">

                    {report.reportId}

                  </span>

                </td>

                <td>

                  <span
                    className={
                      report.source === "Live"
                        ? "source-live"
                        : "source-image"
                    }
                  >

                    {report.source}

                  </span>

                </td>

                <td>

                  {report.detectionDate}

                </td>

                <td>

                  {report.objectCount}

                </td>

                <td>

                  <span className="status-complete">

                    Completed

                  </span>

                </td>

                <td>

                  <div className="action-group">

                    <button
                      className="action-btn view-btn"
                      onClick={() => onView(report)}
                    >

                      <FiEye />

                    </button>

                    <button
                      className="action-btn pdf-btn"
                      onClick={() => onPDF(report.id)}
                    >

                      <FiFileText />

                    </button>

                    <button
                      className="action-btn csv-btn"
                      onClick={() => onCSV(report.id)}
                    >

                      <FiDownload />

                    </button>

                  </div>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default ReportsTable;