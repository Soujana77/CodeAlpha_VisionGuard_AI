import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function ObjectChart({ analytics }) {

  const data = Object.entries(
    analytics.objectDistribution || {}
  ).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="chart-card">

      <h2>Object Distribution</h2>

      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="value"
            fill="#2563eb"
            radius={[6, 6, 0, 0]}
          />

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}

export default ObjectChart;