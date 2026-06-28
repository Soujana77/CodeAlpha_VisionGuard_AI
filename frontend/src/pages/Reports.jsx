import { useEffect, useState } from "react";

import MainLayout from "../components/layout/MainLayout";

import { getAnalytics } from "../services/analyticsService";

import SummaryCards from "../components/reports/SummaryCards";
import ObjectChart from "../components/reports/ObjectChart";
import SourceChart from "../components/reports/SourceChart";
import SessionTable from "../components/reports/SessionTable";

import "../styles/reports.css";

function Reports() {
  const [analytics, setAnalytics] = useState({
    totalImages: 0,
    totalObjects: 0,
    averageObjects: 0,
    mostDetectedObject: "-",
    objectDistribution: {},
    sourceDistribution: {},
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      const response = await getAnalytics();
      setAnalytics(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="reports-page">

        <div className="reports-header">

          <div>
            <h1>Detection Reports</h1>

            <p>
              Analyze surveillance activity and generate detection reports.
            </p>
          </div>

          <div className="reports-actions">

            <input type="date" />

            <button
              className="pdf-btn"
              disabled
            >
              Export PDF
            </button>

            <button
              className="csv-btn"
              disabled
            >
              Export CSV
            </button>

          </div>

        </div>

        {!loading && (
          <>
            <SummaryCards analytics={analytics} />

            <div className="charts-grid">

              <ObjectChart analytics={analytics} />

              <SourceChart analytics={analytics} />

            </div>

            <SessionTable />
          </>
        )}

      </div>
    </MainLayout>
  );
}

export default Reports;