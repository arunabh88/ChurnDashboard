import React from 'react'
import './KPISummary.css'

function KPISummary() {
  const kpiMetrics = [
    {
      metric: 'Global Retention Rate',
      current: '73%',
      change: '-3%',
      trend: 'down',
      commentary: 'Decline due to Europe churn spike',
    },
    {
      metric: 'Avg Churn Probability',
      current: '27%',
      change: '+4 pts',
      trend: 'up',
      commentary: 'Higher risk in Premium tiers',
    },
    {
      metric: 'Sentiment Score',
      current: '62%',
      change: '-5 pts',
      trend: 'down',
      commentary: 'Pricing negativity trend',
    },
    {
      metric: 'Engagement Rate',
      current: '44%',
      change: '-8%',
      trend: 'down',
      commentary: 'Content fatigue in key markets',
    },
    {
      metric: 'Active Campaigns',
      current: '12',
      change: '+3',
      trend: 'up',
      commentary: 'Positive impact in APAC',
    },
  ]

  return (
    <section className="section kpi-summary">
      <div className="section-header">
        <h2>KPI Summary Board</h2>
        <p className="section-subtitle">Key metrics at a glance</p>
      </div>

      <div className="kpi-table">
        <div className="table-header">
          <div className="table-cell header-cell">Metric</div>
          <div className="table-cell header-cell">Current</div>
          <div className="table-cell header-cell">Change (QoQ)</div>
          <div className="table-cell header-cell">AI Commentary</div>
        </div>
        {kpiMetrics.map((item, index) => (
          <div key={index} className="table-row">
            <div className="table-cell">
              <span className="metric-name">{item.metric}</span>
            </div>
            <div className="table-cell">
              <span className="metric-value">{item.current}</span>
            </div>
            <div className="table-cell">
              <span className={`metric-change ${item.trend}`}>
                {item.trend === 'up' ? '↑' : '↓'} {item.change}
              </span>
            </div>
            <div className="table-cell">
              <span className="metric-commentary">{item.commentary}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default KPISummary
