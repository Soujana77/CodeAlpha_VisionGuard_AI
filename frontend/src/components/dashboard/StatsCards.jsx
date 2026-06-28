import { useEffect, useState } from "react";

import {
  FiImage,
  FiBox,
  FiTrendingUp,
  FiTarget
} from "react-icons/fi";

import { getAnalytics } from "../../services/analyticsService";

function StatsCards() {

  const [stats, setStats] = useState({

    totalImages: 0,

    totalObjects: 0,

    averageObjects: 0,

    mostDetectedObject: "-"

  });

  useEffect(() => {

    loadStats();

  }, []);

  const loadStats = async () => {

    try {

      const response = await getAnalytics();

      setStats(response.data);

    }

    catch (error) {

      console.error(error);

    }

  };

  const cards = [

    {

      title: "Images",

      value: stats.totalImages,

      icon: <FiImage />,

      color: "#3B82F6"

    },

    {

      title: "Objects",

      value: stats.totalObjects,

      icon: <FiBox />,

      color: "#22C55E"

    },

    {

      title: "Avg / Image",

      value: stats.averageObjects,

      icon: <FiTrendingUp />,

      color: "#F59E0B"

    },

    {

      title: "Top Object",

      value: stats.mostDetectedObject,

      icon: <FiTarget />,

      color: "#A855F7"

    }

  ];

  return (

    <div className="stats-grid">

      {cards.map((card) => (

        <div
          className="stat-card"
          key={card.title}
        >

          <div
            className="stat-icon"
            style={{
              background: card.color
            }}
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