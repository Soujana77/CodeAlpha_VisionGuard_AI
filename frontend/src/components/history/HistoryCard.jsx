import { useMemo, useState } from "react";
import "./History.css";

function HistoryCard({ item }) {
  const [open, setOpen] = useState(false);

  const summary = useMemo(() => {
    const counts = {};

    item.objects.forEach((object) => {
      counts[object.class] = (counts[object.class] || 0) + 1;
    });

    return counts;
  }, [item.objects]);

  return (
    <div className="history-card">

      <div className="history-header">

        <div>

          <span className="history-badge">
            {item.source}
          </span>

          <h3>{item.timestamp}</h3>

          <p>
            <strong>{item.object_count}</strong> Objects Detected
          </p>

        </div>

      </div>

      <div className="history-summary">

        <h4>Summary</h4>

        {Object.entries(summary).map(([name, count]) => (

          <div
            key={name}
            className="summary-row"
          >
            <span>{name}</span>
            <strong>x {count}</strong>
          </div>

        ))}

      </div>

      <button
        className="history-btn"
        onClick={() => setOpen(!open)}
      >
        {open ? "Hide Details" : "View Details"}
      </button>

      {open && (

        <div className="history-details">

          {Object.entries(summary).map(([name]) => (

            <div
              key={name}
              className="detail-group"
            >

              <h4>{name}</h4>

              {item.objects
                .filter((obj) => obj.class === name)
                .map((obj, index) => (

                  <div
                    key={index}
                    className="history-object"
                  >
                    <span>Detection {index + 1}</span>

                    <strong>
                      {obj.confidence}%
                    </strong>
                  </div>

                ))}

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default HistoryCard;