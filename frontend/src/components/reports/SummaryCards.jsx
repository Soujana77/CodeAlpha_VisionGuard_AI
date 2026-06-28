function SummaryCards({ analytics }) {
  const cards = [
    {
      title: "Total Images",
      value: analytics.totalImages,
    },
    {
      title: "Total Objects",
      value: analytics.totalObjects,
    },
    {
      title: "Average Objects",
      value: analytics.averageObjects,
    },
    {
      title: "Most Detected",
      value: analytics.mostDetectedObject,
    },
  ];

  return (
    <div className="reports-summary">
      {cards.map((card) => (
        <div
          key={card.title}
          className="summary-card"
        >
          <h3>{card.title}</h3>
          <h2>{card.value}</h2>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;