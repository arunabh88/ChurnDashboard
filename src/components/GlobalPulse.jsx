import React from 'react'
import './GlobalPulse.css'
import KPICard from './KPICard'
import GlobalHeatmap from './GlobalHeatmap'
import AITrendInsight from './AITrendInsight'

function GlobalPulse() {
  return (
    <section className="section global-pulse">
      <div className="section-header">
        <h2>Global Subscriber Pulse</h2>
        <p className="section-subtitle">Establish global context and trend summary</p>
      </div>
      
      <div className="kpi-grid">
        <KPICard 
          title="Total Subscribers" 
          value="12.4M" 
          change="+3.2%"
          trend="up"
        />
        <KPICard 
          title="Active Subscribers" 
          value="9.1M" 
          change="-1.8%"
          trend="down"
        />
        <KPICard 
          title="At-Risk Subscribers" 
          value="2.8M" 
          change="+12.5%"
          trend="up"
          isWarning
        />
        <KPICard 
          title="Avg Churn %" 
          value="27%" 
          change="+4 pts"
          trend="up"
          isWarning
        />
        <KPICard 
          title="Retention Rate" 
          value="73%" 
          change="-3%"
          trend="down"
        />
        <KPICard 
          title="Avg LTV" 
          value="35%" 
          change="+2.1%"
          trend="up"
        />
      </div>

      <div className="pulse-content-grid">
        <div className="heatmap-container">
          <GlobalHeatmap />
        </div>
        <div className="insight-container">
          <AITrendInsight />
        </div>
      </div>
    </section>
  )
}

export default GlobalPulse
