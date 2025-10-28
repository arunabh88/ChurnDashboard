import React from 'react'
import { Cell, RadialBarChart, RadialBar, Legend } from 'recharts'
import './SentimentExperience.css'

function SentimentExperience() {
  const gaugeData = [
    { name: 'Score', value: 62, fill: '#10b981' },
    { name: 'Remaining', value: 38, fill: '#e5e7eb' },
  ]

  return (
    <div className="sentiment-experience">
      <h3 className="block-title">C. Sentiment & Service Experience</h3>
      
      <div className="gauge-container">
        <div style={{ width: '100%', height: '200px' }}>
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
              content={({ payload }) => (
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <div style={{ fontSize: '32px', fontWeight: '700', color: '#1a1a1a' }}>
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
        </div>
      </div>

      <div className="word-cloud">
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
