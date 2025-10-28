import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'
import './EngagementAnalysis.css'

function EngagementAnalysis() {
  const engagementCauses = [
    { name: 'Content Fatigue', value: 28 },
    { name: 'Irrelevant Recs', value: 25 },
    { name: 'App Performance', value: 18 },
    { name: 'Competing OTT', value: 16 },
    { name: 'Ad Overload', value: 13 },
  ]

  const trendData = [
    { month: 'Jan', hours: 8.5 },
    { month: 'Feb', hours: 8.2 },
    { month: 'Mar', hours: 7.9 },
    { month: 'Apr', hours: 7.5 },
    { month: 'May', hours: 7.1 },
    { month: 'Jun', hours: 6.8 },
  ]

  return (
    <div className="engagement-analysis">
      <h3 className="block-title">A. Engagement Drop Analysis</h3>
      <p className="block-subtitle">Low Engagement Causes</p>
      
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={engagementCauses}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} angle={-45} textAnchor="end" height={60} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <p className="trend-label">Engagement Decline (Avg Watch Hours)</p>
        <ResponsiveContainer width="100%" height={120}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Line type="monotone" dataKey="hours" stroke="#ef4444" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="ai-note">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        Users showing a <strong>20% drop</strong> in weekly engagement have a 
        <strong> 2.3x higher churn likelihood</strong>.
      </div>
    </div>
  )
}

export default EngagementAnalysis
