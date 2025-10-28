import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import './ScenarioPlanner.css'

function ScenarioPlanner() {
  const [selectedScenario, setSelectedScenario] = useState('combined')

  const scenarioData = {
    combined: [
      { month: 'Jul', base: 27, predicted: 22, recovered: 480 },
      { month: 'Aug', base: 29, predicted: 23, recovered: 490 },
      { month: 'Sep', base: 31, predicted: 24, recovered: 510 },
    ],
    discount: [
      { month: 'Jul', base: 27, predicted: 24, recovered: 350 },
      { month: 'Aug', base: 29, predicted: 26, recovered: 360 },
      { month: 'Sep', base: 31, predicted: 28, recovered: 370 },
    ],
    content: [
      { month: 'Jul', base: 27, predicted: 25, recovered: 280 },
      { month: 'Aug', base: 29, predicted: 27, recovered: 290 },
      { month: 'Sep', base: 31, predicted: 29, recovered: 300 },
    ],
  }

  const scenarios = [
    { id: 'combined', label: 'Combined', description: 'Content + Discount' },
    { id: 'discount', label: 'Discount Only', description: 'Loyalty Discounts' },
    { id: 'content', label: 'Content Push', description: 'Content Re-engagement' },
  ]

  return (
    <section className="section scenario-planner">
      <div className="section-header">
        <h2>Scenario Planner — "What If We Intervene?"</h2>
        <p className="section-subtitle">Quantify business impact</p>
      </div>

      <div className="scenario-toggles">
        {scenarios.map((scenario) => (
          <button
            key={scenario.id}
            className={`scenario-toggle ${selectedScenario === scenario.id ? 'active' : ''}`}
            onClick={() => setSelectedScenario(scenario.id)}
          >
            <div className="toggle-label">{scenario.label}</div>
            <div className="toggle-desc">{scenario.description}</div>
          </button>
        ))}
      </div>

      <div className="scenario-content">
        <div className="chart-container">
          <h3 className="chart-title">Churn Rate Projection</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={scenarioData[selectedScenario]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="base" stroke="#ef4444" strokeWidth={2} name="Baseline Churn %" />
              <Line type="monotone" dataKey="predicted" stroke="#10b981" strokeWidth={2} name="Predicted Churn %" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="roi-summary">
          <div className="roi-card">
            <div className="roi-label">Recovered Revenue</div>
            <div className="roi-value">${scenarioData[selectedScenario][0].recovered}M</div>
            <div className="roi-chart">
              <div className="roi-bar" style={{ width: '85%', backgroundColor: '#10b981' }} />
            </div>
          </div>
          <div className="roi-card">
            <div className="roi-label">Retention Lift</div>
            <div className="roi-value">+8%</div>
            <div className="roi-chart">
              <div className="roi-bar" style={{ width: '65%', backgroundColor: '#3b82f6' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="ai-comment">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        Combining content re-engagement with discounts recovers 
        <strong> $480M </strong>in projected revenue.
      </div>
    </section>
  )
}

export default ScenarioPlanner
