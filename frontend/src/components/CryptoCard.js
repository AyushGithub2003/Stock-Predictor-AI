import React from 'react';

// CRYPTO CARD COMPONENT: Displays cryptocurrency prices and market data
function CryptoCard({ data, theme }) {
  if (!data) return null;

  // FORMATTER: Convert numbers to currency format
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  // FORMATTER: Convert large numbers to readable format (T, B, M)
  const formatMarketCap = (cap) => {
    if (cap >= 1e12) return `$${(cap / 1e12).toFixed(2)}T`;
    if (cap >= 1e9) return `$${(cap / 1e9).toFixed(2)}B`;
    if (cap >= 1e6) return `$${(cap / 1e6).toFixed(2)}M`;
    return formatPrice(cap);
  };

  // UTILITY: Determine color based on positive/negative change
  const getChangeColor = (change) => change >= 0 ? theme.success : theme.warning;

  return (
    <div className="card">
      <div className="card-header">
        <span style={{ fontSize: '1.5em' }}>🪙</span>
        <h2>Cryptocurrency</h2>
      </div>

      <div className="card-content">
        {/* BITCOIN SECTION */}
        {data.bitcoin && (
          <div className="crypto-item">
            <div className="crypto-name">Bitcoin (BTC)</div>
            <div className="crypto-price">{formatPrice(data.bitcoin.usd)}</div>
            <div className="stat-row">
              <span className="stat-label">24h Change</span>
              <span
                className="stat-value"
                style={{ color: getChangeColor(data.bitcoin.usd_24h_change) }}
              >
                {data.bitcoin.usd_24h_change?.toFixed(2)}%
              </span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Market Cap</span>
              <span className="stat-value">{formatMarketCap(data.bitcoin.usd_market_cap)}</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">24h Volume</span>
              <span className="stat-value">{formatMarketCap(data.bitcoin.usd_24h_vol)}</span>
            </div>
          </div>
        )}

        {/* ETHEREUM SECTION */}
        {data.ethereum && (
          <div className="crypto-item">
            <div className="crypto-name">Ethereum (ETH)</div>
            <div className="crypto-price">{formatPrice(data.ethereum.usd)}</div>
            <div className="stat-row">
              <span className="stat-label">24h Change</span>
              <span
                className="stat-value"
                style={{ color: getChangeColor(data.ethereum.usd_24h_change) }}
              >
                {data.ethereum.usd_24h_change?.toFixed(2)}%
              </span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Market Cap</span>
              <span className="stat-value">{formatMarketCap(data.ethereum.usd_market_cap)}</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">24h Volume</span>
              <span className="stat-value">{formatMarketCap(data.ethereum.usd_24h_vol)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CryptoCard;
