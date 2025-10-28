import React, { useState } from 'react'
import './AIPanel.css'

function AIPanel() {
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      content: 'Welcome to Sky TV Churn Intelligence! I can help you analyze churn drivers, recommend actions, and run scenarios. What would you like to know?',
    },
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    const aiResponses = {
      'show top 3 churn drivers by plan': 'Engagement (42%), Sentiment (22%), Billing (15%) — Premium plans show highest risk.',
      'recommend recovery actions': 'Suggest discounts and content refresh. Estimated recovery: 8%.',
      'what is the retention rate': 'Global Retention Rate is currently 73%, down 3% QoQ due to Europe churn spike.',
      'analyze premium tier': 'Premium users are experiencing 42% engagement decline and high price sensitivity post-Q2 revisions.',
    }

    const aiResponse = aiResponses[input.toLowerCase()] || 
      "I can help you analyze churn data, recommend retention actions, or explore scenarios. Try asking about drivers, recovery actions, or specific metrics."

    setMessages([...messages, userMessage, { role: 'ai', content: aiResponse }])
    setInput('')
  }

  return (
    <div className="ai-panel">
      <div className="panel-header">
        <div className="panel-title">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <h3>Agentic AI Assistant</h3>
        </div>
        <p className="panel-subtitle">Empower human + AI collaboration</p>
      </div>

      <div className="panel-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            <div className="message-header">
              {msg.role === 'ai' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              )}
              <span className="message-role">{msg.role === 'ai' ? 'AI Assistant' : 'You'}</span>
            </div>
            <div className="message-content">{msg.content}</div>
          </div>
        ))}
      </div>

      <div className="quick-prompts">
        <p className="quick-label">Quick Prompts:</p>
        <button onClick={() => setInput('Show top 3 churn drivers by plan')} className="quick-btn">
          Show top 3 churn drivers by plan
        </button>
        <button onClick={() => setInput('Recommend recovery actions')} className="quick-btn">
          Recommend recovery actions
        </button>
        <button onClick={() => setInput('What is the retention rate')} className="quick-btn">
          What is the retention rate
        </button>
      </div>

      <div className="panel-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask about churn drivers, actions, or scenarios..."
          className="input-field"
        />
        <button onClick={handleSend} className="send-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="22" y1="2" x2="11" y2="13"/>
            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default AIPanel
