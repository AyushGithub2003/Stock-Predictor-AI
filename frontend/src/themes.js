// THEME SYSTEM: Collection of color themes for the application
// Each theme has a unique gradient and color palette
export const themes = {
  dark: {
    name: 'Dark Mode',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    primary: '#00d4ff',
    secondary: '#ff006e',
    card: '#0f3460',
    text: '#e0e0e0',
    textDark: '#ffffff',
    success: '#00ff88',
    warning: '#ff6b35',
    accent: '#00d4ff',
  },
  neon: {
    name: 'Neon Nights',
    background: 'linear-gradient(135deg, #0a0e27 0%, #1a0033 100%)',
    primary: '#00ff00',
    secondary: '#ff00ff',
    card: '#1a1a3e',
    text: '#00ff00',
    textDark: '#00ff88',
    success: '#00ff00',
    warning: '#ff00ff',
    accent: '#00ffff',
  },
  sunset: {
    name: 'Sunset Dream',
    background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 50%, #c44569 100%)',
    primary: '#ffd700',
    secondary: '#fff5e1',
    card: '#ff8c42',
    text: '#2c2c2c',
    textDark: '#ffffff',
    success: '#27ae60',
    warning: '#e74c3c',
    accent: '#ffd700',
  },
  ocean: {
    name: 'Ocean Blue',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    primary: '#64b5f6',
    secondary: '#42a5f5',
    card: '#5e35b1',
    text: '#e3f2fd',
    textDark: '#ffffff',
    success: '#4caf50',
    warning: '#ff9800',
    accent: '#64b5f6',
  },
  forest: {
    name: 'Forest Green',
    background: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
    primary: '#a8d8ea',
    secondary: '#aa96da',
    card: '#2d6a4f',
    text: '#d8f3dc',
    textDark: '#ffffff',
    success: '#52b788',
    warning: '#ff6b6b',
    accent: '#a8d8ea',
  },
  midnight: {
    name: 'Midnight Purple',
    background: 'linear-gradient(135deg, #2a0845 0%, #3d1a6d 100%)',
    primary: '#b19cd9',
    secondary: '#e0aaff',
    card: '#4a1986',
    text: '#f0e6ff',
    textDark: '#ffffff',
    success: '#81c784',
    warning: '#ffb74d',
    accent: '#e0aaff',
  },
  cyberpunk: {
    name: 'Cyberpunk',
    background: 'linear-gradient(135deg, #0d0221 0%, #1d0b56 50%, #130f40 100%)',
    primary: '#ff006e',
    secondary: '#8338ec',
    card: '#3a0ca3',
    text: '#ffbe0b',
    textDark: '#00f5ff',
    success: '#00ff00',
    warning: '#ff006e',
    accent: '#00f5ff',
  },
  pastel: {
    name: 'Pastel Dreams',
    background: 'linear-gradient(135deg, #fcc2d7 0%, #fcc2d7 50%, #fff0f5 100%)',
    primary: '#ff69b4',
    secondary: '#ff1493',
    card: '#ffc0cb',
    text: '#8b4789',
    textDark: '#4a4a4a',
    success: '#98fb98',
    warning: '#ffa500',
    accent: '#dda0dd',
  },
};

// UTILITY: Get random theme from available themes
export const getRandomTheme = () => {
  const themeKeys = Object.keys(themes);
  const randomKey = themeKeys[Math.floor(Math.random() * themeKeys.length)];
  return { key: randomKey, ...themes[randomKey] };
};

// UTILITY: Get all theme names as array
export const getThemeNames = () => Object.keys(themes);
