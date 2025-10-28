import React, { useState } from 'react'
import './GlobalHeatmap.css'

function GlobalHeatmap() {
  const [riskFilter, setRiskFilter] = useState('All')
  
  const regions = [
    { name: 'North America', risk: 'high', churn: 34 },
    { name: 'Europe', risk: 'high', churn: 32 },
    { name: 'APAC', risk: 'medium', churn: 24 },
    { name: 'Latin America', risk: 'medium', churn: 21 },
    { name: 'Middle East', risk: 'low', churn: 18 },
  ]

  const filteredRegions = riskFilter === 'All' 
    ? regions 
    : regions.filter(r => r.risk === riskFilter.toLowerCase())

  const riskStats = {
    high: regions.filter(r => r.risk === 'high').length,
    medium: regions.filter(r => r.risk === 'medium').length,
    low: regions.filter(r => r.risk === 'low').length,
  }

  return (
    <div className="heatmap">
      <div className="heatmap-header">
        <h3 className="heatmap-title">Global Churn Heatmap</h3>
        <div className="risk-filters">
          <button 
            className={`filter-btn ${riskFilter === 'All' ? 'active' : ''}`}
            onClick={() => setRiskFilter('All')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${riskFilter === 'high' ? 'active' : ''}`}
            onClick={() => setRiskFilter('high')}
          >
            High ({riskStats.high})
          </button>
          <button 
            className={`filter-btn ${riskFilter === 'medium' ? 'active' : ''}`}
            onClick={() => setRiskFilter('medium')}
          >
            Medium ({riskStats.medium})
          </button>
          <button 
            className={`filter-btn ${riskFilter === 'low' ? 'active' : ''}`}
            onClick={() => setRiskFilter('low')}
          >
            Low ({riskStats.low})
          </button>
        </div>
      </div>
      
      <div className="regions-list">
        {filteredRegions.map((region, index) => (
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
        {filteredRegions.length === 0 && (
          <div className="no-results">No regions found for this filter.</div>
        )}
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
