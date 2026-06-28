import MainLayout from "../components/layout/MainLayout";
import "../styles/reports.css";

function Reports() {
  return (
    <MainLayout>
      <div className="reports-page">

        <div className="reports-header">
          <div>
            <h1>Detection Reports</h1>
            <p>
              Generate, analyze and export surveillance detection reports.
            </p>
          </div>

          <div className="reports-actions">
            <input type="date" />

            <button className="pdf-btn">
              Export PDF
            </button>

            <button className="csv-btn">
              Export CSV
            </button>
          </div>
        </div>

        <div className="reports-summary">

          <div className="summary-card">
            <h3>Total Images</h3>
            <h2>--</h2>
          </div>

          <div className="summary-card">
            <h3>Total Objects</h3>
            <h2>--</h2>
          </div>

          <div className="summary-card">
            <h3>Average Objects</h3>
            <h2>--</h2>
          </div>

          <div className="summary-card">
            <h3>Most Detected</h3>
            <h2>--</h2>
          </div>

        </div>

        <div className="report-section">
          <h2>Detection Charts</h2>

          <div className="placeholder-box">
            Charts will appear here.
          </div>
        </div>

        <div className="report-section">
          <h2>Session Reports</h2>

          <div className="placeholder-box">
            Detection session history will appear here.
          </div>
        </div>

      </div>
    </MainLayout>
  );
}

export default Reports;