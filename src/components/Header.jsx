import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <h1>Sky TV | Global Churn Prediction & Retention Intelligence</h1>
        <p className="header-subtitle">AI-powered insights for proactive subscriber retention and loyalty growth</p>
      </div>
      <div className="header-actions">
        <button className="icon-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Header
