import React from 'react'
import './RetentionPlaybook.css'

function RetentionPlaybook() {
  const playbookActions = [
    {
      segment: 'Premium Users - US Region',
      rootCause: 'Price dissatisfaction',
      actions: [
        { icon: '💸', label: 'Loyalty Discount' },
        { icon: '🎬', label: 'Personalized Content Campaign' },
        { icon: '🎁', label: 'Ad-supported Upgrade' },
        { icon: '✉️', label: 'Concierge Outreach' },
      ],
    },
    {
      segment: 'Standard Users - EU Region',
      rootCause: 'Engagement drop',
      actions: [
        { icon: '🎬', label: 'Content Refresh' },
        { icon: '📱', label: 'App Enhancement' },
        { icon: '🎁', label: 'Recommendation Boost' },
      ],
    },
    {
      segment: 'Basic Users - APAC',
      rootCause: 'Billing issues',
      actions: [
        { icon: '💰', label: 'Payment Reminder' },
        { icon: '💳', label: 'Payment Method Update' },
      ],
    },
  ]

  return (
    <section className="section retention-playbook">
      <div className="section-header">
        <h2>AI-Driven Retention Playbook</h2>
        <p className="section-subtitle">Enable decision-making directly from insights</p>
      </div>

      <div className="playbook-cards">
        {playbookActions.map((item, index) => (
          <div key={index} className="playbook-card">
            <div className="card-header">
              <h3 className="card-segment">{item.segment}</h3>
              <p className="card-cause">Root Cause: {item.rootCause}</p>
            </div>
            <div className="card-actions">
              <p className="suggested-label">Suggested AI Actions:</p>
              <div className="action-buttons">
                {item.actions.map((action, idx) => (
                  <button key={idx} className="action-btn">
                    <span className="action-icon">{action.icon}</span>
                    <span>{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="card-footer">
              <button className="trigger-btn">Trigger Action</button>
              <button className="simulate-btn">Simulate Outcome</button>
            </div>
          </div>
        ))}
      </div>

      <div className="playbook-prompt">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        Launching top 3 interventions could reduce global churn by <strong>18%</strong>.
      </div>
    </section>
  )
}

export default RetentionPlaybook
