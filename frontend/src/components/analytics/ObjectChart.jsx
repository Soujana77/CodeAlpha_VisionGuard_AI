import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

function ObjectChart({ data }) {

  return (

    <div className="chart-card">

      <h3>Object Distribution</h3>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <BarChart data={data}>

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="count"
            fill="#2563EB"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

}

export default ObjectChart;