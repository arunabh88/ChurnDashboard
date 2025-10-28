import React from 'react'
import './GlobalHeatmap.css'

function GlobalHeatmap() {
  const regions = [
    { name: 'North America', risk: 'high', churn: 34 },
    { name: 'Europe', risk: 'high', churn: 32 },
    { name: 'APAC', risk: 'medium', churn: 24 },
    { name: 'Latin America', risk: 'medium', churn: 21 },
    { name: 'Middle East', risk: 'low', churn: 18 },
  ]

  return (
    <div className="heatmap">
      <h3 className="heatmap-title">Global Churn Heatmap</h3>
      <div className="regions-list">
        {regions.map((region, index) => (
          <div key={index} className={`region-item region-${region.risk}`}>
            <div className="region-info">
              <span className="region-name">{region.name}</span>
              <span className="region-churn">{region.churn}%</span>
            </div>
            <div className="risk-bar">
              <div 
                className={`risk-fill risk-${region.risk}`}
                style={{ width: `${(region.churn / 40) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="risk-legend">
        <div className="legend-item">
          <div className="legend-color risk-high"></div>
          <span>High Risk</span>
        </div>
        <div className="legend-item">
          <div className="legend-color risk-medium"></div>
          <span>Medium Risk</span>
        </div>
        <div className="legend-item">
          <div className="legend-color risk-low"></div>
          <span>Low Risk</span>
        </div>
      </div>
    </div>
  )
}

export default GlobalHeatmap
