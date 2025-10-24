# Stock Predictor Frontend

React dashboard for real-time cryptocurrency, currency exchange, and S&P 500 stock monitoring with price predictions.

## Features

- **Cryptocurrency Dashboard**: Live Bitcoin and Ethereum prices with 24h changes
- **Currency Exchange Rates**: Real-time USD conversion rates for 170+ currencies
- **S&P 500 Stock Tracking**: Monitor 20 major companies with price history
- **Stock Predictions**: Linear regression-based price predictions
- **Auto-refresh**: Data updates every 60 seconds
- **Responsive Design**: Beautiful gradient UI with interactive components
- **Expandable Cards**: Click stocks to see detailed predictions and price ranges

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file (copy from `.env.example`):

```
REACT_APP_API_URL=http://localhost:5000/api
```

## Running the App

Development server (runs on `http://localhost:3000`):
```bash
npm start
```

Build for production:
```bash
npm run build
```

Run tests:
```bash
npm test
```

## Project Structure

```
src/
├── App.js                 # Main app component
├── index.js              # React entry point
├── index.css             # Global styles
└── components/
    ├── CryptoCard.js     # Cryptocurrency display
    ├── CurrencyCard.js   # Currency rates display
    └── StocksCard.js     # S&P 500 stocks display
```

## Components

### CryptoCard
Displays Bitcoin and Ethereum prices with market cap and 24-hour volume.

### CurrencyCard
Shows USD exchange rates with ability to toggle between major and all currencies.

### StocksCard
Lists S&P 500 stocks grouped by gainers/losers with:
- Current price
- Daily percentage change
- Predicted price
- 30-day high/low
- Visual expand/collapse

## Dependencies

- **react**: UI framework
- **axios**: HTTP client for API calls
- **recharts**: Charting library (included for future enhancements)
- **lucide-react**: Icon library

## API Integration

Frontend communicates with the backend API at `http://localhost:5000/api`:
- `/api/crypto` - Cryptocurrency data
- `/api/currency` - Currency rates
- `/api/stocks` - Stock data with predictions
- `/api/dashboard` - Combined data endpoint

## Styling

Uses CSS Grid and Flexbox for responsive layout with:
- Purple gradient background
- Card-based UI with hover effects
- Color-coded gainers (green) and losers (red)
- Mobile-friendly design

## License

MIT
