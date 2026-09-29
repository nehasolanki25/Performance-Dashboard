import {
  useCallback,
  useMemo,
  useState,
} from "react";

import StatCard from "../components/StatCard";
import Card from "../components/Card";
import Button from "../components/Button";

import { calculateAverage } from "../utils/helpers";

function Dashboard() {
  const [count, setCount] = useState(0);
  const [showStats, setShowStats] = useState(true);

  const performanceData = [80, 90, 70, 95, 85];

  const averagePerformance = useMemo(() => {
    console.log("Calculating average...");

    return calculateAverage(performanceData);
  }, []);

  const handleIncrease = useCallback(() => {
    setCount((previousCount) => previousCount + 1);
  }, []);

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="page-tag">OVERVIEW</span>
          <h1>Dashboard</h1>
          <p>
            Welcome back! Here's what's happening today.
          </p>
        </div>

        <Button
          onClick={() => setShowStats(!showStats)}
        >
          {showStats ? "Hide Stats" : "Show Stats"}
        </Button>
      </div>

      {showStats && (
        <div className="stats-grid">
          <StatCard
            title="Total Users"
            value="1,248"
            icon="👥"
            description="+12.5% from last month"
          />

          <StatCard
            title="Active Users"
            value="986"
            icon="🟢"
            description="+8.2% from last month"
          />

          <StatCard
            title="Projects"
            value="42"
            icon="📁"
            description="+4 new projects"
          />

          <StatCard
            title="Performance"
            value={`${averagePerformance}%`}
            icon="⚡"
            description="Average performance"
          />
        </div>
      )}

      <div className="dashboard-grid">
        <Card title="Performance Overview">
          <div className="chart">
            {performanceData.map((value, index) => (
              <div className="chart-item" key={index}>
                <div
                  className="bar"
                  style={{
                    height: `${value * 2}px`,
                  }}
                ></div>

                <span>Week {index + 1}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="State Demo">
          <div className="counter-box">
            <p>Button clicked:</p>

            <strong>{count}</strong>

            <Button onClick={handleIncrease}>
              Increase Count
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;