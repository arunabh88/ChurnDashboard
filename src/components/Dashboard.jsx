import React from 'react'
import Header from './Header'
import GlobalPulse from './GlobalPulse'
import CategoryDrivers from './CategoryDrivers'
import ModelBreakdown from './ModelBreakdown'
import RetentionPlaybook from './RetentionPlaybook'
import ScenarioPlanner from './ScenarioPlanner'
import KPISummary from './KPISummary'
import AIPanel from './AIPanel'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-content">
        <div className="dashboard-main">
          <GlobalPulse />
          <CategoryDrivers />
          <ModelBreakdown />
          <RetentionPlaybook />
          <ScenarioPlanner />
          <KPISummary />
        </div>
        <div className="dashboard-sidebar">
          <AIPanel />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
