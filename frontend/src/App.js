import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Settings as SettingsIcon, RefreshCw } from 'lucide-react';
import CryptoCard from './components/CryptoCard';
import CurrencyCard from './components/CurrencyCard';
import StocksCard from './components/StocksCard';
import Settings from './components/Settings';
import { themes, getRandomTheme } from './themes';
import './index.css';

const API_URL = 'http://localhost:5000/api';

// MAIN APP COMPONENT: Orchestrates the entire dashboard with themes and data fetching
function App() {
  // STATE: Theme and data management
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('selectedTheme');
    return saved ? themes[saved] : getRandomTheme();
  });

  const [crypto, setCrypto] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [stocks, setStocks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [showSettings, setShowSettings] = useState(false);

  // PREFERENCES: User customization options
  const [preferences, setPreferences] = useState(() => {
    const saved = localStorage.getItem('userPreferences');
    return saved ? JSON.parse(saved) : {
      showCrypto: true,
      showCurrency: true,
      showStocks: true,
      compactMode: false,
      showPriceHistory: true,
      refreshInterval: 60,
    };
  });

  // API CALL: Fetch all data from backend with error handling
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [cryptoRes, currencyRes, stocksRes] = await Promise.all([
        axios.get(`${API_URL}/crypto`).catch(() => ({ data: null })),
        axios.get(`${API_URL}/currency`).catch(() => ({ data: null })),
        axios.get(`${API_URL}/stocks`).catch(() => ({ data: null }))
      ]);

      setCrypto(cryptoRes.data);
      setCurrency(currencyRes.data);
      setStocks(stocksRes.data);
      setLastUpdate(new Date().toLocaleTimeString());
    } catch (err) {
      setError('Unable to fetch data. Check backend connection.');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  // LIFECYCLE: Initial load and auto-refresh setup
  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, preferences.refreshInterval * 1000);
    return () => clearInterval(interval);
  }, [preferences.refreshInterval]);

  // HANDLER: Theme change with localStorage persistence
  const handleThemeChange = (themeKey) => {
    const newTheme = themes[themeKey];
    setTheme(newTheme);
    localStorage.setItem('selectedTheme', themeKey);
  };

  // HANDLER: Preferences update with localStorage persistence
  const handlePreferencesChange = (newPreferences) => {
    setPreferences(newPreferences);
    localStorage.setItem('userPreferences', JSON.stringify(newPreferences));
  };

  // STYLE: Dynamic CSS variables based on current theme
  const dynamicStyles = {
    '--primary': theme.primary,
    '--secondary': theme.secondary,
    '--card': theme.card,
    '--text': theme.text,
    '--textDark': theme.textDark,
    '--success': theme.success,
    '--warning': theme.warning,
    '--accent': theme.accent,
  };

  return (
    <div
      className="app-container"
      style={{
        background: theme.background,
        color: theme.text,
        ...dynamicStyles,
      }}
    >
      {/* NAVBAR: Header with title and controls */}
      <nav className="navbar" style={{ background: `${theme.card}cc` }}>
        <h1 style={{ color: theme.primary }}>📈 Stock Predictor</h1>
        <div className="navbar-controls">
          <button
            className="btn btn-primary"
            onClick={fetchData}
            disabled={loading}
            style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` }}
          >
            <RefreshCw size={18} style={{ animation: loading ? 'spin 1s linear infinite' : 'none' }} />
            {loading ? 'Loading...' : 'Refresh'}
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setShowSettings(true)}
            style={{ borderColor: theme.primary, color: theme.text }}
          >
            <SettingsIcon size={18} />
            Settings
          </button>
        </div>
      </nav>

      {/* ERROR MESSAGE: Display if data fetch fails */}
      {error && <div className="error">⚠️ {error}</div>}

      {/* MAIN CONTENT GRID: Responsive layout for cards */}
      <div className="main-grid">
        {preferences.showCrypto && crypto && <CryptoCard data={crypto} theme={theme} />}
        {preferences.showCurrency && currency && <CurrencyCard data={currency} theme={theme} />}
      </div>

      {/* STOCKS SECTION: Full-width stock data display */}
      {preferences.showStocks && stocks && <StocksCard data={stocks} theme={theme} />}

      {/* LOADING STATE: Spinner when fetching data */}
      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Fetching market data...</p>
        </div>
      )}

      {/* TIMESTAMP: Show when data was last updated */}
      {lastUpdate && <div className="timestamp">Last updated: {lastUpdate}</div>}

      {/* SETTINGS MODAL: Theme and preference selection */}
      {showSettings && (
        <Settings
          theme={theme}
          onThemeChange={handleThemeChange}
          preferences={preferences}
          onPreferencesChange={handlePreferencesChange}
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  );
}

export default App;
