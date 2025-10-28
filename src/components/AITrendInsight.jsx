import React from 'react'
import './AITrendInsight.css'

function AITrendInsight() {
  const insights = [
    {
      icon: '📈',
      text: 'Churn risk increased by 6% this quarter',
      emphasis: 'led by North America and Europe'
    },
    {
      icon: '💰',
      text: 'Pricing pressure causing premium plan dissatisfaction',
      emphasis: 'especially in US and EU markets'
    },
    {
      icon: '📺',
      text: 'Low engagement correlates with 2.3x higher churn likelihood',
      emphasis: '20% drop in weekly watch hours'
    },
    {
      icon: '🔔',
      text: 'Billing delays up 9% in Standard tier',
      emphasis: 'directly linked to +6% churn lift'
    },
    {
      icon: '💬',
      text: 'Negative sentiment spiked 12% in Europe',
      emphasis: 'focus on pricing and support experience'
    }
  ]

  return (
    <div className="ai-insight-bubble">
      <div className="insight-header">
        <div className="ai-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          AI Trend Insights
        </div>
      </div>
      <div className="insight-content">
        <ul className="insight-list">
          {insights.map((insight, index) => (
            <li key={index} className="insight-item">
              <span className="insight-icon">{insight.icon}</span>
              <div className="insight-text">
                <strong>{insight.text}</strong>
                <span className="insight-detail"> — {insight.emphasis}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AITrendInsight
