import React, { useState, useEffect } from 'react';

const stats = [
  { label: 'Projects', value: '10+' },
  { label: 'Technologies', value: '10+' },
  { label: 'Certificates', value: '5+' },
  { label: 'Experience', value: '2+ years' },
];

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;