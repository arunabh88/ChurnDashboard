import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts'
import './ModelBreakdown.css'

function ModelBreakdown() {
  const factors = [
    { factor: 'Engagement Decline', value: 42, color: '#ef4444' },
    { factor: 'Negative Sentiment', value: 22, color: '#f59e0b' },
    { factor: 'Billing Issues', value: 15, color: '#3b82f6' },
    { factor: 'Content Saturation', value: 13, color: '#8b5cf6' },
    { factor: 'Lack of Re-engagement', value: 8, color: '#10b981' },
  ]

  const pieData = factors.map(f => ({
    name: f.factor,
    value: f.value,
    color: f.color
  }))

  const total = factors.reduce((sum, f) => sum + f.value, 0)

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

        <div className="model-insights">
          <div className="donut-chart-container">
            <h3 className="chart-title-small">Factor Distribution</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={70}
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
          </div>

          <div className="factor-summary">
            <div className="factor-total">
              <span className="total-label">Total Factor Impact</span>
              <span className="total-value">{total}%</span>
            </div>
            
            <div className="top-factors">
              <p className="factors-title">Top 3 Drivers</p>
              {factors.slice(0, 3).map((factor, idx) => (
                <div key={idx} className="factor-item">
                  <div className="factor-bar">
                    <div 
                      className="factor-fill" 
                      style={{ width: `${(factor.value / factors[0].value) * 100}%`, backgroundColor: factor.color }}
                    />
                  </div>
                  <span className="factor-name">{factor.factor}</span>
                  <span className="factor-value">{factor.value}%</span>
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
