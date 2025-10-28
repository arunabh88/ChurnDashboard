import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import './ModelBreakdown.css'

function ModelBreakdown() {
  const factors = [
    { factor: 'Engagement Decline', value: 42, color: '#ef4444' },
    { factor: 'Negative Sentiment', value: 22, color: '#f59e0b' },
    { factor: 'Billing Issues', value: 15, color: '#3b82f6' },
    { factor: 'Content Saturation', value: 13, color: '#8b5cf6' },
    { factor: 'Lack of Re-engagement', value: 8, color: '#10b981' },
  ]

  return (
    <section className="section model-breakdown">
      <div className="section-header">
        <h2>Churn Prediction Model Breakdown</h2>
        <p className="section-subtitle">Explain what drives the churn probability model</p>
      </div>

      <div className="model-content">
        <div className="factors-chart">
          <h3 className="chart-title">Aggregated Factors</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={factors} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" tick={{ fontSize: 12 }} />
              <YAxis dataKey="factor" type="category" tick={{ fontSize: 12 }} width={150} />
              <Tooltip />
              <Bar dataKey="value">
                {factors.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
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
