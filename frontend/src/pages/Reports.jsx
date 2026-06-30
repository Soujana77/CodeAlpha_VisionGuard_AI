import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import ReportsToolbar from "../components/reports/ReportsToolbar";
import ReportsTable from "../components/reports/ReportsTable";

import {
  getReports,
  downloadPDF,
  downloadCSV,
} from "../services/reportService";

import "../styles/reports.css";

function Reports() {

  const navigate = useNavigate();

  const [reports, setReports] = useState([]);

  const [search, setSearch] = useState("");

  const [source, setSource] = useState("");

  const [date, setDate] = useState("");

 useEffect(() => {

  loadReports();

}, [

  search,

  source,

  date,

]);

  const loadReports = async () => {

  try {

    const response = await getReports(

      search,

      source,

      date

    );

    setReports(response.data);

  }

  catch (err) {

    console.error(err);

  }

};

  const handlePDF = async (id) => {

    const response = await downloadPDF(id);

    const url = window.URL.createObjectURL(
      response.data
    );

    const link = document.createElement("a");

    link.href = url;

    link.download = `report_${id}.pdf`;

    link.click();

  };

  const handleCSV = async (id) => {

    const response = await downloadCSV(id);

    const url = window.URL.createObjectURL(
      response.data
    );

    const link = document.createElement("a");

    link.href = url;

    link.download = `report_${id}.csv`;

    link.click();

  };

  

  return (

    <MainLayout>

      <div className="reports-page">

        <div className="reports-header">

          <h1>Detection Reports</h1>

          <p>

            Search, filter and download surveillance reports.

          </p>

        </div>

        <ReportsToolbar

          search={search}

          setSearch={setSearch}

          source={source}

          setSource={setSource}

          date={date}

          setDate={setDate}

          refresh={loadReports}

        />

        <ReportsTable

         reports={reports}

          onView={(report) =>
            navigate(`/reports/${report.id}`)
          }

          onPDF={handlePDF}

          onCSV={handleCSV}

        />

      </div>

    </MainLayout>

  );

}

export default Reports;