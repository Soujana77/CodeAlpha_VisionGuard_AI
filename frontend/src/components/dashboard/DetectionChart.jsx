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

function DetectionChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Detections",
        data: [18, 27, 21, 39, 32, 45, 36],
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
        <h3>Detection Overview</h3>
      </div>

      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default DetectionChart;