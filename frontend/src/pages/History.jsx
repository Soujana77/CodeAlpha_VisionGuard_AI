import { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import HistoryCard from "../components/history/HistoryCard";
import { getHistory } from "../services/historyService";

function History() {

  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const response = await getHistory();

      setHistory(response.data);

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <MainLayout>

      <div className="dashboard-header">

        <h1>Detection History</h1>

        <p>
          All detections stored in the SQLite database.
        </p>

      </div>

      <div className="history-container">

        {history.length === 0 ? (

          <h3>No detections found.</h3>

        ) : (

          history.map((item) => (

            <HistoryCard
              key={item.id}
              item={item}
            />

          ))

        )}

      </div>

    </MainLayout>
  );
}

export default History;