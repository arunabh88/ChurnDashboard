import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import './SentimentExperience.css'

function SentimentExperience() {
  const sentimentScore = 62
  const sentimentTrend = [
    { month: 'Jan', score: 67 },
    { month: 'Feb', score: 66 },
    { month: 'Mar', score: 65 },
    { month: 'Apr', score: 64 },
    { month: 'May', score: 63 },
    { month: 'Jun', score: 62 },
  ]

  // Calculate the percentage for the gauge
  const percentage = (sentimentScore / 100) * 100
  const circumference = 2 * Math.PI * 45 // radius of 45
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  // Determine color based on score
  const getColor = (score) => {
    if (score >= 70) return '#10b981'
    if (score >= 50) return '#f59e0b'
    return '#ef4444'
  }

  const sentimentColor = getColor(sentimentScore)

  return (
    <div className="sentiment-experience">
      <h3 className="block-title">C. Sentiment & Service Experience</h3>
      
      <div className="sentiment-grid">
        <div className="gauge-section">
          <p className="section-label">Current Sentiment</p>
          <div className="gauge-container">
            <div className="sentiment-gauge">
              <svg viewBox="0 0 120 60" style={{ width: '100%', height: 'auto', maxHeight: '160px' }}>
                {/* Background semicircle */}
                <path
                  d="M 20 50 A 40 40 0 0 1 100 50"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                {/* Value semicircle */}
                <path
                  d="M 20 50 A 40 40 0 0 1 100 50"
                  fill="none"
                  stroke={sentimentColor}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  style={{ transition: 'all 0.3s ease' }}
                  transform="rotate(-90 60 50)"
                />
              </svg>
              <div className="gauge-content">
                <div className="gauge-value">{sentimentScore}%</div>
                <div className="gauge-label">Sentiment Score</div>
                <div className="gauge-change">↓ 5 pts QoQ</div>
              </div>
            </div>
            <div className="gauge-status">
              <span className={`status-badge status-${sentimentScore >= 70 ? 'positive' : sentimentScore >= 50 ? 'warning' : 'negative'}`}>
                {sentimentScore >= 70 ? 'Positive' : sentimentScore >= 50 ? 'Moderate' : 'Critical'}
              </span>
            </div>
          </div>
        </div>

        <div className="trend-section">
          <p className="section-label">Sentiment Trend (Last 6 Months)</p>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={sentimentTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} domain={[55, 70]} />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="#ef4444" 
                strokeWidth={2}
                dot={{ fill: '#ef4444', r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="word-cloud">
        <p className="cloud-label">Top Feedback Terms</p>
        <div className="word-tag">Pricing</div>
        <div className="word-tag">New Content</div>
        <div className="word-tag">Value</div>
        <div className="word-tag">Ads</div>
        <div className="word-tag">Support</div>
      </div>

      <div className="ai-insight">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        Negative sentiment around <strong>pricing</strong> and <strong>support</strong> 
        spiked <strong>12%</strong> in Europe.
      </div>
    </div>
  )
}

export default SentimentExperience
