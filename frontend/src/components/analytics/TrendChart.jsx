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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

function TrendChart({ data }) {

  const chartData = {

    labels: data.labels,

    datasets: [

      {

        label: "Objects Detected",

        data: data.values,

        borderColor: "#2563EB",

        backgroundColor: "rgba(37,99,235,0.15)",

        fill: true,

        tension: 0.35,

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

          color: "#CBD5E1",

        },

      },

      y: {

        beginAtZero: true,

        ticks: {

          color: "#CBD5E1",

        },

      },

    },

  };

  return (

    <div className="analytics-card">

      <h3>Detection Trend</h3>

      <div
        style={{
          height: "320px",
          marginTop: "20px",
        }}
      >

        <Line
          data={chartData}
          options={options}
        />

      </div>

    </div>

  );

}

export default TrendChart;