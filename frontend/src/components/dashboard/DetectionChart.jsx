import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

import { getDashboard } from "../../services/dashboardService";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

function DetectionChart() {

  const [chartData, setChartData] = useState({
    labels: [],
    values: [],
  });

 useEffect(() => {

  loadChart();

  const interval = setInterval(() => {

    loadChart();

  }, 2000);

  return () => clearInterval(interval);

}, []);

  const loadChart = async () => {
    try {

      const data = await getDashboard();

      setChartData(data.chart);

    } catch (err) {

      console.error(err);

    }
  };

  const data = {

    labels: chartData.labels,

    datasets: [

      {

        label: "Detected Objects",

        data: chartData.values,

        borderColor: "#3B82F6",

        backgroundColor: "rgba(59,130,246,.18)",

        fill: true,

        tension: 0.4,

        pointRadius: 4,

        pointBackgroundColor: "#3B82F6",

      },

    ],

  };

  const options = {

    responsive: true,

    maintainAspectRatio: false,

    plugins: {

      legend: {

        labels: {

          color: "#E2E8F0",

        },

      },

    },

    scales: {

      x: {

        ticks: {

          color: "#94A3B8",

        },

        grid: {

          color: "#1F2937",

        },

      },

      y: {

        beginAtZero: true,

        ticks: {

          color: "#94A3B8",

        },

        grid: {

          color: "#1F2937",

        },

      },

    },

  };

  return (

    <div className="chart-card">

      <div className="card-header">

        <h3>Detection Activity</h3>

      </div>

      <div className="chart-container">

        <Line
          data={data}
          options={options}
        />

      </div>

    </div>

  );

}

export default DetectionChart;