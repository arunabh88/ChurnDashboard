import React from 'react'
import './KPICard.css'

function KPICard({ title, value, change, trend, isWarning }) {
  const isPositive = trend === 'up' && !isWarning
  const isNegative = trend === 'down' || isWarning

  return (
    <div className={`kpi-card ${isWarning ? 'kpi-warning' : ''}`}>
      <div className="kpi-header">
        <span className="kpi-title">{title}</span>
      </div>
      <div className="kpi-value">{value}</div>
      <div className={`kpi-change ${isPositive ? 'positive' : isNegative ? 'negative' : ''}`}>
        {trend === 'up' && <span className="change-icon">↑</span>}
        {trend === 'down' && <span className="change-icon">↓</span>}
        {change}
      </div>
    </div>
  )
}

export default KPICard
