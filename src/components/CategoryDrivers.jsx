import React from 'react'
import EngagementAnalysis from './EngagementAnalysis'
import BillingHealth from './BillingHealth'
import SentimentExperience from './SentimentExperience'
import PriceSensitivity from './PriceSensitivity'
import './CategoryDrivers.css'

function CategoryDrivers() {
  return (
    <section className="section category-drivers">
      <div className="section-header">
        <h2>Category-Level Churn Drivers</h2>
        <p className="section-subtitle">Why are subscribers leaving?</p>
      </div>
      
      <div className="drivers-grid">
        <div className="driver-block">
          <EngagementAnalysis />
        </div>
        <div className="driver-block">
          <BillingHealth />
        </div>
      </div>
      
      <div className="drivers-grid">
        <div className="driver-block">
          <SentimentExperience />
        </div>
        <div className="driver-block">
          <PriceSensitivity />
        </div>
      </div>
    </section>
  )
}

export default CategoryDrivers
