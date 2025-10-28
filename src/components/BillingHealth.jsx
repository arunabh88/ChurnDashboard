import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import './BillingHealth.css'

function BillingHealth() {
  const billingData = [
    { tier: 'Premium', onTime: 85, delayed: 15 },
    { tier: 'Standard', onTime: 72, delayed: 28 },
    { tier: 'Basic', onTime: 68, delayed: 32 },
  ]

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
          <button className="risk-btn active">High</button>
          <button className="risk-btn">Medium</button>
          <button className="risk-btn">Low</button>
        </div>
      </div>
    </div>
  )
}

export default BillingHealth
