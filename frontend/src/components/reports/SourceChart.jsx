import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = [
  "#2563eb",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
];

function SourceChart({ analytics }) {

  const data = Object.entries(
    analytics.sourceDistribution || {}
  ).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="chart-card">

      <h2>Detection Sources</h2>

      <ResponsiveContainer
        width="100%"
        height={320}
      >

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={110}
            label
          >

            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  COLORS[index % COLORS.length]
                }
              />
            ))}

          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default SourceChart;