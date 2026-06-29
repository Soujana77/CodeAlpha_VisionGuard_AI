import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import {
  getReports,
  downloadPDF,
  downloadCSV,
} from "../services/reportService";

import "../styles/reports.css";

function ReportDetails() {

  const { id } = useParams();

  const [report, setReport] = useState(null);

  useEffect(() => {

    loadReport();

  }, []);

  const loadReport = async () => {

    const response = await getReports();

    const item = response.data.find(
      (r) => r.id === Number(id)
    );

    setReport(item);

  };

  if (!report) {

    return (
      <MainLayout>

        <h2>Loading...</h2>

      </MainLayout>
    );

  }

  const handlePDF = async () => {

  const response = await downloadPDF(report.id);

  const url = window.URL.createObjectURL(
    response.data
  );

  const link = document.createElement("a");

  link.href = url;

  link.download = `${report.reportId}.pdf`;

  link.click();

};

const handleCSV = async () => {

  const response = await downloadCSV(report.id);

  const url = window.URL.createObjectURL(
    response.data
  );

  const link = document.createElement("a");

  link.href = url;

  link.download = `${report.reportId}.csv`;

  link.click();

};
  return (

    <MainLayout>

      <div className="report-details">

        <div className="details-header">

          <div>

            <h1>{report.reportId}</h1>

            <div className="details-tags">

  <span>

    {report.source}

  </span>

  <span>

    {report.objectCount} Objects

  </span>

</div>

          </div>

          <div className="details-actions">

            <button
              className="pdf-btn"
              onClick={handlePDF}
            >
              PDF
            </button>

            <button
              className="csv-btn"
              onClick={handleCSV}
            >
              CSV
            </button>

          </div>

        </div>

    <img
  className="details-image"
  src={
    report.image
      ? `http://127.0.0.1:5000/${report.image}`
      : "/placeholder.png"
  }
  alt="Detection"
  onClick={() =>
    window.open(
      `http://127.0.0.1:5000/${report.image}`,
      "_blank"
    )
  }
/>

        <div className="details-grid">

          <div>

            <strong>Detection Date</strong>

            <p>{report.detectionDate}</p>

          </div>

          <div>

            <strong>Report Generated</strong>

            <p>{report.reportDate}</p>

          </div>

          <div>

            <strong>Objects</strong>

            <p>{report.objectCount}</p>

          </div>

        </div>

        <table className="objects-table">

          <thead>

<tr>

<th>#</th>

<th>Detected Object</th>

<th>Confidence</th>

</tr>

</thead>

          <tbody>

            {report.objects.map((obj,index)=>(

              <tr>

<td>{index+1}</td>

<td>{obj.class}</td>

<td>{obj.confidence}%</td>

</tr>

            ))}

          </tbody>

        </table>

      </div>

    </MainLayout>

  );

}

export default ReportDetails;