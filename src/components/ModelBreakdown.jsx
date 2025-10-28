import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts'
import './ModelBreakdown.css'

function ModelBreakdown() {
  const [impactFilter, setImpactFilter] = useState('All')
  
  const factors = [
    { factor: 'Engagement Decline', value: 42, color: '#ef4444', impact: 'high' },
    { factor: 'Negative Sentiment', value: 22, color: '#f59e0b', impact: 'high' },
    { factor: 'Billing Issues', value: 15, color: '#3b82f6', impact: 'medium' },
    { factor: 'Content Saturation', value: 13, color: '#8b5cf6', impact: 'medium' },
    { factor: 'Lack of Re-engagement', value: 8, color: '#10b981', impact: 'low' },
  ]

  // Filter factors based on selected impact level
  const filteredFactors = impactFilter === 'All' 
    ? factors 
    : factors.filter(f => f.impact === impactFilter)

  const impactCounts = {
    all: factors.length,
    high: factors.filter(f => f.impact === 'high').length,
    medium: factors.filter(f => f.impact === 'medium').length,
    low: factors.filter(f => f.impact === 'low').length,
  }

  const pieData = filteredFactors.map(f => ({
    name: f.factor,
    value: f.value,
    color: f.color
  }))

  const total = filteredFactors.reduce((sum, f) => sum + f.value, 0)

  return (
    <section className="section model-breakdown">
      <div className="section-header">
        <h2>Churn Prediction Model Breakdown</h2>
        <p className="section-subtitle">Explain what drives the churn probability model</p>
      </div>

      <div className="model-content">
        <div className="factors-chart">
          <div className="factors-header">
            <h3 className="chart-title">Aggregated Factors</h3>
            <div className="factor-filters">
              <button 
                className={`filter-btn ${impactFilter === 'All' ? 'active' : ''}`}
                onClick={() => setImpactFilter('All')}
              >
                All ({impactCounts.all})
              </button>
              <button 
                className={`filter-btn ${impactFilter === 'high' ? 'active' : ''}`}
                onClick={() => setImpactFilter('high')}
              >
                High ({impactCounts.high})
              </button>
              <button 
                className={`filter-btn ${impactFilter === 'medium' ? 'active' : ''}`}
                onClick={() => setImpactFilter('medium')}
              >
                Medium ({impactCounts.medium})
              </button>
              <button 
                className={`filter-btn ${impactFilter === 'low' ? 'active' : ''}`}
                onClick={() => setImpactFilter('low')}
              >
                Low ({impactCounts.low})
              </button>
            </div>
          </div>
          <div className="factor-cards-grid">
            {filteredFactors.map((factor, index) => {
              const percentage = (factor.value / 50) * 100
              return (
                <div key={index} className="factor-card">
                  <div className="factor-card-header">
                    <div className="factor-icon-wrapper" style={{ backgroundColor: factor.color + '20' }}>
                      <span className="factor-rank">#{index + 1}</span>
                    </div>
                    <div className="factor-info">
                      <div className="factor-name-card">{factor.factor}</div>
                      <div className="factor-percentage">{factor.value}% Impact</div>
                    </div>
                  </div>
                  <div className="factor-progress-wrapper">
                    <div className="factor-progress-bar">
                      <div 
                        className="factor-progress-fill" 
                        style={{ 
                          width: `${percentage}%`,
                          backgroundColor: factor.color
                        }}
                      />
                    </div>
                  </div>
                  <div className="factor-description">
                    {index === 0 && "Primary driver of churn risk"}
                    {index === 1 && "Secondary contributing factor"}
                    {index === 2 && "Significant impact on retention"}
                    {index === 3 && "Moderate influence on churn"}
                    {index === 4 && "Minor contributing element"}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="model-insights">
          <div className="donut-chart-container">
            <h3 className="chart-title-small">Factor Distribution</h3>
            <div className="donut-wrapper">
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={85}
                    innerRadius={55}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="donut-center-text">
                <div className="center-value">{total}%</div>
                <div className="center-label">Total Impact</div>
              </div>
            </div>
            <div className="donut-legend">
              {filteredFactors.slice(0, 3).map((item, idx) => (
                <div key={idx} className="legend-item-horizontal">
                  <div className="legend-color-box" style={{ backgroundColor: item.color }} />
                  <div className="legend-text">
                    <span className="legend-name">{item.factor}</span>
                    <span className="legend-value">{item.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="ai-commentary">
          <div className="ai-comment-header">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            AI Commentary
          </div>
          <p className="ai-comment-text">
            A <strong>10% increase</strong> in engagement correlates with a 
            <strong> 7% reduction</strong> in churn probability.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ModelBreakdown
