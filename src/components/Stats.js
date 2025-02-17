import React, { useEffect, useState } from "react";
import "./Stats.css";

const statsData = [
  { title: "Clients", count: 50, suffix: "+" },
  { title: "Projects Completed", count: 120, suffix: "+" },
  { title: "Years of Experience", count: 5, suffix: "+" },
];

const Stats = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          count < statsData[index].count ? count + 1 : count
        )
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="stats-section">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3 className="stat-number">
              {counts[index]}
              {stat.suffix}
            </h3>
            <p className="stat-title">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
