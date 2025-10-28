# Sky TV | Global Churn Prediction & Retention Intelligence Dashboard

A comprehensive AI-powered dashboard for proactive subscriber retention and loyalty growth.

## Features

### 🎯 Global Subscriber Pulse
- Real-time KPI cards (Total Subscribers, Active, At-Risk, Churn %, Retention Rate, LTV)
- Global churn heatmap by region
- AI-powered trend insights

### 📊 Category-Level Churn Drivers
- **Engagement Drop Analysis**: Breakdown of low engagement causes
- **Payment & Billing Health**: On-time vs. delayed payment tracking
- **Sentiment & Service Experience**: Global sentiment scoring and feedback
- **Plan & Price Sensitivity**: Churn probability by plan type and region

### 🤖 Churn Prediction Model Breakdown
- Aggregated factors visualization
- AI commentary on correlation trends

### 💡 AI-Driven Retention Playbook
- Dynamic action cards per segment
- Suggested interventions with trigger actions
- Impact projections

### 📈 Scenario Planner
- Interactive what-if simulations
- Predicted retention lift and ROI
- Revenue recovery calculations

### 📋 KPI Summary Board
- Comprehensive metrics table
- Quarter-over-quarter changes
- AI-powered commentary

### 💬 Conversational AI Panel
- Natural language queries
- Quick prompts for common questions
- Real-time insights and recommendations

## Tech Stack

- **React 18** - UI framework
- **Recharts** - Data visualization
- **Framer Motion** - Animations
- **Vite** - Build tool
- **CSS3** - Styling with modern gradients and effects

## Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx          # Main dashboard container
│   │   ├── Header.jsx              # Top header component
│   │   ├── GlobalPulse.jsx         # Global metrics section
│   │   ├── CategoryDrivers.jsx     # Churn drivers analysis
│   │   ├── ModelBreakdown.jsx      # Prediction model details
│   │   ├── RetentionPlaybook.jsx   # AI-driven actions
│   │   ├── ScenarioPlanner.jsx     # What-if simulations
│   │   ├── KPISummary.jsx          # Metrics summary table
│   │   └── AIPanel.jsx             # Conversational AI
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Design Philosophy

This dashboard follows Salesforce Lightning design language principles:
- Clean, modern aesthetic with subtle gradients
- Clear data visualization hierarchy
- Responsive layout for various screen sizes
- Interactive elements with hover states
- AI-powered insights throughout

## Features in Detail

### Interactive Elements
- Hover states on cards reveal micro-trends
- All insights linked to recommended actions
- Scenario toggles for quick analysis
- Quick prompts in AI panel for faster queries

### Visual Hierarchy
- Gradient backgrounds for depth
- Color-coded risk indicators
- Clear typography and spacing
- Rounded corners for modern feel

## Future Enhancements

- [ ] Real-time data integration
- [ ] Advanced filtering and drill-down
- [ ] Custom date range selection
- [ ] Export to PDF/Excel functionality
- [ ] Multi-user collaboration features
- [ ] Mobile-optimized responsive layout

## License

MIT

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

Built with ❤️ for proactive subscriber retention and loyalty growth.
