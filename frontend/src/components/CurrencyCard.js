import React, { useState } from 'react';

// CURRENCY CARD COMPONENT: Displays exchange rates with toggleable view
function CurrencyCard({ data, theme }) {
  if (!data || !data.rates) return null;

  // STATE: Toggle between major and all currencies
  const [showAll, setShowAll] = useState(false);

  // MAJOR CURRENCIES: Most commonly used currencies
  const majorCurrencies = ['EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'INR', 'MXN'];
  
  // DISPLAY: Show major or all currencies based on state
  const displayed = showAll
    ? Object.keys(data.rates).slice(0, 20)
    : majorCurrencies;

  return (
    <div className="card">
      <div className="card-header">
        <span style={{ fontSize: '1.5em' }}>💱</span>
        <h2>Currency Exchange Rates</h2>
      </div>

      {/* CURRENCY GRID: Display exchange rates */}
      <div className="currency-grid">
        {displayed.map((curr) => (
          <div key={curr} className="currency-item" style={{ borderColor: theme.primary }}>
            <div className="currency-code" style={{ color: theme.primary }}>{curr}</div>
            <div className="currency-rate" style={{ color: theme.text }}>
              {data.rates[curr]?.toFixed(4) || 'N/A'}
            </div>
          </div>
        ))}
      </div>

      {/* TOGGLE BUTTON: Switch between major and all currencies */}
      <button
        className="btn btn-secondary"
        style={{
          marginTop: '16px',
          width: '100%',
          borderColor: theme.primary,
          color: theme.text,
          background: theme.card,
        }}
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? '🔼 Show Major Currencies' : '🔽 Show All Currencies'}
      </button>
    </div>
  );
}

export default CurrencyCard;
