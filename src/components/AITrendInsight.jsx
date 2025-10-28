import React from 'react'
import './AITrendInsight.css'

function AITrendInsight() {
  return (
    <div className="ai-insight-bubble">
      <div className="insight-header">
        <div className="ai-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          AI Trend Insight
        </div>
      </div>
      <div className="insight-content">
        <p>
          Churn risk increased by <strong className="highlight">6%</strong> this quarter, 
          led by <strong>North America</strong> and <strong>Europe</strong> due to 
          <strong> pricing pressure</strong> and <strong>low engagement</strong> in 
          premium plans.
        </p>
      </div>
    </div>
  )
}

export default AITrendInsight
