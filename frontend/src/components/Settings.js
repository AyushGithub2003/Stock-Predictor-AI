import React, { useState } from 'react';
import { X, Shuffle } from 'lucide-react';
import { themes, getThemeNames } from '../themes';

// SETTINGS COMPONENT: Allows users to customize theme and data visibility preferences
function Settings({ theme, onThemeChange, preferences, onPreferencesChange, onClose }) {
  const [showThemes, setShowThemes] = useState(false);

  // UTILITY: Toggle data visibility for different sections
  const handleToggleData = (dataType) => {
    onPreferencesChange({
      ...preferences,
      [dataType]: !preferences[dataType]
    });
  };

  return (
    <div className="settings-overlay" onClick={onClose}>
      <div className="settings-modal" onClick={(e) => e.stopPropagation()} style={{ borderTop: `4px solid ${theme.primary}` }}>
        <div className="settings-header">
          <h2>⚙️ Settings</h2>
          <button className="close-btn" onClick={onClose} style={{ color: theme.primary }}>
            <X size={24} />
          </button>
        </div>

        <div className="settings-content">
          {/* THEME SELECTOR SECTION */}
          <div className="settings-section">
            <h3 style={{ color: theme.primary }}>Theme Selection</h3>
            <div className="theme-buttons">
              <button
                className="theme-btn random-btn"
                onClick={() => {
                  const randomThemeKey = getThemeNames()[Math.floor(Math.random() * getThemeNames().length)];
                  onThemeChange(randomThemeKey);
                }}
                style={{ 
                  background: `linear-gradient(135deg, ${theme.secondary}, ${theme.primary})`,
                  color: theme.textDark
                }}
              >
                <Shuffle size={16} /> Random Theme
              </button>
              <button
                className="theme-btn toggle-btn"
                onClick={() => setShowThemes(!showThemes)}
                style={{ 
                  background: theme.card,
                  color: theme.textDark,
                  border: `2px solid ${theme.primary}`
                }}
              >
                {showThemes ? '🔼 Hide Themes' : '🔽 Show All Themes'}
              </button>
            </div>

            {showThemes && (
              <div className="theme-grid">
                {getThemeNames().map((themeKey) => (
                  <button
                    key={themeKey}
                    className={`theme-option ${themeKey === theme.name.toLowerCase().replace(' ', '') ? 'active' : ''}`}
                    onClick={() => onThemeChange(themeKey)}
                    style={{
                      background: themes[themeKey].background,
                      border: theme.name === themes[themeKey].name ? `3px solid ${theme.primary}` : '2px solid rgba(255,255,255,0.2)',
                      transform: theme.name === themes[themeKey].name ? 'scale(1.05)' : 'scale(1)',
                    }}
                  >
                    <span className="theme-name">{themes[themeKey].name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* DATA VISIBILITY SECTION */}
          <div className="settings-section">
            <h3 style={{ color: theme.primary }}>Display Options</h3>
            <div className="checkbox-group">
              {[
                { key: 'showCrypto', label: '🪙 Cryptocurrency', icon: '🪙' },
                { key: 'showCurrency', label: '💱 Currency Rates', icon: '💱' },
                { key: 'showStocks', label: '📊 Stock Market', icon: '📊' },
              ].map(({ key, label, icon }) => (
                <label key={key} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={preferences[key] || false}
                    onChange={() => handleToggleData(key)}
                    style={{ accentColor: theme.primary }}
                  />
                  <span style={{ color: theme.text }}>{icon} {label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* REFRESH INTERVAL SECTION */}
          <div className="settings-section">
            <h3 style={{ color: theme.primary }}>Refresh Interval</h3>
            <div className="interval-options">
              {[30, 60, 120, 300].map((seconds) => (
                <button
                  key={seconds}
                  className={`interval-btn ${preferences.refreshInterval === seconds ? 'active' : ''}`}
                  onClick={() => onPreferencesChange({ ...preferences, refreshInterval: seconds })}
                  style={{
                    background: preferences.refreshInterval === seconds ? theme.primary : theme.card,
                    color: preferences.refreshInterval === seconds ? '#000' : theme.text,
                    border: `2px solid ${theme.primary}`
                  }}
                >
                  {seconds < 60 ? `${seconds}s` : `${Math.floor(seconds / 60)}m`}
                </button>
              ))}
            </div>
          </div>

          {/* DISPLAY PREFERENCES SECTION */}
          <div className="settings-section">
            <h3 style={{ color: theme.primary }}>Display Preferences</h3>
            <div className="checkbox-group">
              {[
                { key: 'compactMode', label: 'Compact Mode' },
                { key: 'showPriceHistory', label: 'Show Price History' },
              ].map(({ key, label }) => (
                <label key={key} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={preferences[key] || false}
                    onChange={() => handleToggleData(key)}
                    style={{ accentColor: theme.primary }}
                  />
                  <span style={{ color: theme.text }}>{label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
