import { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import TrendChart from "../components/analytics/TrendChart";
import SummaryCard from "../components/analytics/SummaryCard";
import ObjectChart from "../components/analytics/ObjectChart";
import SourceChart from "../components/analytics/SourceChart";

import { getAnalytics } from "../services/analyticsService";

import "./Analytics.css";

function Analytics() {

  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {

    try {

      const response = await getAnalytics();

      setAnalytics(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  if (!analytics) {

    return (

      <MainLayout>

        <h2>Loading Analytics...</h2>

      </MainLayout>

    );

  }

  const objectData = Object.entries(
    analytics.objectDistribution
  ).map(([name, count]) => ({
    name,
    count
  }));

  const sourceData = Object.entries(
    analytics.sourceDistribution
  ).map(([name, value]) => ({
    name,
    value
  }));

  return (

    <MainLayout>

      <div className="dashboard-header">

        <h1>Analytics Dashboard</h1>

        <p>
          AI Detection Statistics
        </p>

      </div>

      <div className="summary-grid">

  <SummaryCard
    title="Images Processed"
    value={analytics.totalImages}
  />

  <SummaryCard
    title="Objects Detected"
    value={analytics.totalObjects}
  />

  <SummaryCard
    title="People"
    value={analytics.people}
  />

  <SummaryCard
    title="Vehicles"
    value={analytics.vehicles}
  />

  <SummaryCard
    title="Average / Image"
    value={analytics.averageObjects}
  />

  <SummaryCard
    title="Average Confidence"
    value={`${analytics.averageConfidence}%`}
  />

  <SummaryCard
    title="Unique Classes"
    value={analytics.uniqueObjects}
  />

  <SummaryCard
    title="Top Object"
    value={analytics.mostDetectedObject}
  />

</div>

      <div className="analytics-grid">

        <ObjectChart
          data={objectData}
        />

        <SourceChart
          data={sourceData}
        />

      </div>
      <div className="analytics-grid">

  <TrendChart
    data={analytics.trend}
  />

</div>

    </MainLayout>

  );

}

export default Analytics;