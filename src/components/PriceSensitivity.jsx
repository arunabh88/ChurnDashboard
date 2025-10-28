import React from 'react'
import './PriceSensitivity.css'

function PriceSensitivity() {
  const planData = [
    { plan: 'Premium', region: 'US', probability: 42, color: '#ef4444' },
    { plan: 'Premium', region: 'EU', probability: 38, color: '#f59e0b' },
    { plan: 'Standard', region: 'US', probability: 28, color: '#10b981' },
    { plan: 'Standard', region: 'EU', probability: 24, color: '#3b82f6' },
    { plan: 'Basic', region: 'US', probability: 18, color: '#10b981' },
    { plan: 'Basic', region: 'EU', probability: 15, color: '#10b981' },
  ]

  return (
    <div className="price-sensitivity">
      <h3 className="block-title">D. Plan & Price Sensitivity</h3>
      
      <div className="heat-blocks">
        {planData.map((item, index) => (
          <div key={index} className="heat-block" style={{ backgroundColor: item.color + '20', borderColor: item.color }}>
            <div className="block-header">
              <span className="block-plan">{item.plan}</span>
              <span className="block-region">{item.region}</span>
            </div>
            <div className="block-probability" style={{ color: item.color }}>
              {item.probability}%
            </div>
            <div className="block-bar" style={{ backgroundColor: item.color + '40' }}>
              <div className="block-fill" style={{ width: `${item.probability}%`, backgroundColor: item.color }} />
            </div>
          </div>
        ))}
      </div>

      <div className="ai-callout">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        Premium users most price-sensitive post Q2 price revision — consider 
        <strong> downgrades</strong> or <strong>flexible options</strong>.
      </div>
    </div>
  )
}

export default PriceSensitivity
