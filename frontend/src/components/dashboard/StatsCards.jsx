import { FiUsers, FiTruck, FiAlertTriangle, FiCamera } from "react-icons/fi";

const cards = [
  { title: "People", value: 12, icon: <FiUsers />, color: "#3B82F6" },
  { title: "Vehicles", value: 5, icon: <FiTruck />, color: "#22C55E" },
  { title: "Alerts", value: 2, icon: <FiAlertTriangle />, color: "#EF4444" },
  { title: "Cameras", value: 4, icon: <FiCamera />, color: "#A855F7" },
];

function StatsCards() {
  return (
    <div className="stats-grid">
      {cards.map((card) => (
        <div className="stat-card" key={card.title}>
          <div
            className="stat-icon"
            style={{ background: card.color }}
          >
            {card.icon}
          </div>

          <div>
            <h4>{card.title}</h4>
            <h2>{card.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;