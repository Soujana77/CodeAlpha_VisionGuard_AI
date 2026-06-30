import axios from "axios";

const API = "http://127.0.0.1:5000/api";

export const getReports = (
  reportId = "",
  source = "",
  date = ""
) => {

  return axios.get(`${API}/reports`, {

    params: {

      reportId,

      source,

      date,

    },

  });

};

export const downloadPDF = (id) => {

  return axios.get(
    `${API}/reports/${id}/pdf`,
    {
      responseType: "blob",
    }
  );

};

export const downloadCSV = (id) => {

  return axios.get(
    `${API}/reports/${id}/csv`,
    {
      responseType: "blob",
    }
  );

};