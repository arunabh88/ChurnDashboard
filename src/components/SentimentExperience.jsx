import React from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import './SentimentExperience.css'

function SentimentExperience() {
  const gaugeData = [
    { name: 'Score', value: 62, fill: '#10b981' },
    { name: 'Remaining', value: 38, fill: '#e5e7eb' },
  ]

  const sentimentTrend = [
    { month: 'Jan', score: 67 },
    { month: 'Feb', score: 66 },
    { month: 'Mar', score: 65 },
    { month: 'Apr', score: 64 },
    { month: 'May', score: 63 },
    { month: 'Jun', score: 62 },
  ]

  return (
    <div className="sentiment-experience">
      <h3 className="block-title">C. Sentiment & Service Experience</h3>
      
      <div className="gauge-container">
        <ResponsiveContainer width="100%" height={220}>
          <RadialBarChart 
            cx="50%" 
            cy="50%" 
            innerRadius="60%" 
            outerRadius="90%" 
            data={gaugeData}
            startAngle={90} 
            endAngle={450}
          >
            <RadialBar minAngle={15} dataKey="value" cornerRadius={10} />
            <Legend 
              content={() => (
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                  <div style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a1a' }}>
                    62%
                  </div>
                  <div style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>
                    Sentiment Score
                  </div>
                  <div style={{ fontSize: '12px', color: '#ef4444', marginTop: '8px' }}>
                    ↓ 5 pts QoQ
                  </div>
                </div>
              )}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      <div className="word-cloud">
        <div className="word-tag">Pricing</div>
        <div className="word-tag">New Content</div>
        <div className="word-tag">Value</div>
        <div className="word-tag">Ads</div>
        <div className="word-tag">Support</div>
      </div>

      <div className="trend-chart">
        <p className="trend-label">Sentiment Trend (Last 6 Months)</p>
        <ResponsiveContainer width="100%" height={120}>
          <LineChart data={sentimentTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} domain={[55, 70]} />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="score" 
              stroke="#ef4444" 
              strokeWidth={2}
              dot={{ fill: '#ef4444', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
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
