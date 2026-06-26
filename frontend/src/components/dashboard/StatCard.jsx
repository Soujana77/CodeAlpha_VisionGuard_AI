function StatCard({ title, value, color, icon }) {
  return (
    <div className="stat-card">

      <div
        className="stat-icon"
        style={{ background: color }}
      >
        {icon}
      </div>

      <div>

        <span>{title}</span>

        <h2>{value}</h2>

      </div>

    </div>
  );
}

export default StatCard;