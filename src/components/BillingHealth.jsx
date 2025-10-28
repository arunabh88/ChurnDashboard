import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line } from 'recharts'
import './BillingHealth.css'

function BillingHealth() {
  const [selectedRisk, setSelectedRisk] = useState('High')

  const billingData = [
    { tier: 'Premium', onTime: 85, delayed: 15 },
    { tier: 'Standard', onTime: 72, delayed: 28 },
    { tier: 'Basic', onTime: 68, delayed: 32 },
  ]

  const riskData = {
    High: { count: 1420, trend: [450, 520, 680, 820, 1100, 1420] },
    Medium: { count: 2830, trend: [1200, 1350, 1600, 1900, 2300, 2830] },
    Low: { count: 5200, trend: [2800, 3200, 3800, 4200, 4600, 5200] },
  }

  const currentRisk = riskData[selectedRisk]
  const trendData = currentRisk.trend.map((val, idx) => ({
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][idx],
    accounts: val
  }))

  return (
    <div className="billing-health">
      <h3 className="block-title">B. Payment & Billing Health</h3>
      
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={billingData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="tier" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Bar dataKey="onTime" stackId="a" fill="#10b981" radius={[0, 0, 0, 0]} />
            <Bar dataKey="delayed" stackId="a" fill="#ef4444" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="ai-highlight">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        Billing delays increased <strong>9%</strong> among Standard tier users in Q2 — 
        correlated with churn lift of <strong>+6%</strong>.
      </div>

      <div className="flagged-accounts">
        <p className="flagged-label">Flagged Accounts by Risk Level</p>
        <div className="risk-buttons">
          <button 
            className={`risk-btn ${selectedRisk === 'High' ? 'active' : ''}`}
            onClick={() => setSelectedRisk('High')}
          >
            High
          </button>
          <button 
            className={`risk-btn ${selectedRisk === 'Medium' ? 'active' : ''}`}
            onClick={() => setSelectedRisk('Medium')}
          >
            Medium
          </button>
          <button 
            className={`risk-btn ${selectedRisk === 'Low' ? 'active' : ''}`}
            onClick={() => setSelectedRisk('Low')}
          >
            Low
          </button>
        </div>
        
        <div className="risk-analytics">
          <div className="risk-count">
            <span className="count-label">Total Accounts</span>
            <span className="count-value">{currentRisk.count.toLocaleString()}</span>
          </div>
          
          <div className="trend-chart">
            <p className="trend-label">{selectedRisk} Risk Trend</p>
            <ResponsiveContainer width="100%" height={100}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 9 }} hide />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="accounts" 
                  stroke={selectedRisk === 'High' ? '#ef4444' : selectedRisk === 'Medium' ? '#f59e0b' : '#10b981'} 
                  strokeWidth={2}
                  dot={{ r: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BillingHealth
