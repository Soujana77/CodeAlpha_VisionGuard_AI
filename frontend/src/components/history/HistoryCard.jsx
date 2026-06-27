import { useState } from "react";

function HistoryCard({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="history-card">

      <div className="history-header">

        <div>
          <h3>{item.source}</h3>
          <p>{item.timestamp}</p>
        </div>

        <div>
          <strong>{item.object_count} Objects</strong>
        </div>

      </div>

      <button
        onClick={() => setOpen(!open)}
        className="history-btn"
      >
        {open ? "Hide Details" : "View Details"}
      </button>

      {open && (

        <div className="history-details">

          {item.objects.map((object, index) => (

            <div
              key={index}
              className="history-object"
            >

              <span>{object.class}</span>

              <strong>
                {object.confidence}%
              </strong>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default HistoryCard;