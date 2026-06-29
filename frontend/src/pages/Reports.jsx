import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import MainLayout from "../components/layout/MainLayout";

import {
  getAnalytics,
  exportCSV,
  exportPDF,
} from "../services/analyticsService";

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
      toast.error("Failed to load analytics");
    } finally {
      setLoading(false);
    }
  };

  const downloadFile = (blob, filename) => {
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = filename;

    document.body.appendChild(link);

    link.click();

    link.remove();

    window.URL.revokeObjectURL(url);
  };

  const handleCSV = async () => {
    try {
      const response = await exportCSV();

      downloadFile(
        response.data,
        "visionguard_report.csv"
      );

      toast.success("CSV downloaded");
    } catch (err) {
      console.error(err);
      toast.error("Unable to export CSV");
    }
  };

  const handlePDF = async () => {
    try {
      const response = await exportPDF();

      downloadFile(
        response.data,
        "visionguard_report.pdf"
      );

      toast.success("PDF downloaded");
    } catch (err) {
      console.error(err);
      toast.error("Unable to export PDF");
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
              onClick={handlePDF}
            >
              Export PDF
            </button>

            <button
              className="csv-btn"
              onClick={handleCSV}
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