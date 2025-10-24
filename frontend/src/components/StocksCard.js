import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// STOCKS CARD COMPONENT: Displays S&P 500 stocks with predictions
function StocksCard({ data, theme }) {
  // STATE: Track which stock is expanded for details
  const [expandedStock, setExpandedStock] = useState(null);

  if (!data || data.length === 0) {
    return (
      <div className="card">
        <div className="card-header">
          <span style={{ fontSize: '1.5em' }}>📊</span>
          <h2>S&P 500 Stocks</h2>
        </div>
        <p style={{ color: theme.text, opacity: 0.7 }}>No stock data available</p>
      </div>
    );
  }

  // FILTER: Separate gainers and losers
  const upStocks = data.filter(s => parseFloat(s.change) >= 0);
  const downStocks = data.filter(s => parseFloat(s.change) < 0);

  // COMPONENT: Individual stock item with expandable details
  const StockItem = ({ stock }) => {
    const isExpanded = expandedStock === stock.symbol;
    const isUp = parseFloat(stock.change) >= 0;

    return (
      <div key={stock.symbol} className="stock-item">
        {/* STOCK HEADER: Click to expand/collapse details */}
        <div
          className="stock-header"
          onClick={() => setExpandedStock(isExpanded ? null : stock.symbol)}
          style={{ cursor: 'pointer' }}
        >
          <div>
            <div className="stock-symbol">{stock.symbol}</div>
            <div style={{ fontSize: '0.9em', color: theme.text, marginTop: '4px', opacity: 0.8 }}>
              ${stock.currentPrice?.toFixed(2) || 'N/A'}
            </div>
          </div>
          <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              className={`stock-change ${isUp ? 'up' : 'down'}`}
              style={{
                background: isUp
                  ? `${theme.success}22`
                  : `${theme.warning}22`,
                color: isUp ? theme.success : theme.warning,
              }}
            >
              {isUp ? '↑' : '↓'} {Math.abs(stock.change)}%
            </div>
            <div>{isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</div>
          </div>
        </div>

        {/* EXPANDED DETAILS: Stock prediction and price range */}
        {isExpanded && stock.prediction && (
          <div className="stock-prediction" style={{ borderLeft: `3px solid ${theme.primary}` }}>
            <div style={{ marginBottom: '12px', fontWeight: 'bold', color: theme.primary }}>
              📈 Price Prediction
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span className="stock-prediction-label">Expected Price</span>
              <span
                className="stock-prediction-value"
                style={{ color: theme.primary }}
              >
                ${parseFloat(stock.prediction.predictedPrice).toFixed(2)}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span className="stock-prediction-label">Expected Change</span>
              <span
                className="stock-prediction-value"
                style={{
                  color: stock.prediction.change >= 0 ? theme.success : theme.warning,
                }}
              >
                {stock.prediction.direction} {stock.prediction.change.toFixed(2)}%
              </span>
            </div>

            {/* PRICE RANGE: 30-day high and low */}
            {stock.priceHistory && stock.priceHistory.length > 0 && (
              <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: `1px solid ${theme.primary}33` }}>
                <div style={{ fontSize: '0.85em', color: theme.text }}>
                  <div>📊 30-Day High: <span style={{ color: theme.primary, fontWeight: 'bold' }}>${Math.max(...stock.priceHistory).toFixed(2)}</span></div>
                  <div>📉 30-Day Low: <span style={{ color: theme.primary, fontWeight: 'bold' }}>${Math.min(...stock.priceHistory).toFixed(2)}</span></div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <span style={{ fontSize: '1.5em' }}>📊</span>
        <h2>S&P 500 Stocks ({data.length})</h2>
      </div>

      <div className="stocks-container">
        {/* GAINERS SECTION: Positive performing stocks */}
        {upStocks.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: theme.success, marginBottom: '12px', fontSize: '1em', opacity: 0.9 }}>
              ↑ Gainers ({upStocks.length})
            </h3>
            {upStocks.map(stock => <StockItem key={stock.symbol} stock={stock} />)}
          </div>
        )}

        {/* LOSERS SECTION: Negative performing stocks */}
        {downStocks.length > 0 && (
          <div>
            <h3 style={{ color: theme.warning, marginBottom: '12px', fontSize: '1em', opacity: 0.9 }}>
              ↓ Losers ({downStocks.length})
            </h3>
            {downStocks.map(stock => <StockItem key={stock.symbol} stock={stock} />)}
          </div>
        )}
      </div>
    </div>
  );
}

export default StocksCard;
