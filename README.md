# 📈 Stock Predictor Dashboard

A modern, full-stack application for real-time cryptocurrency, currency exchange, and S&P 500 stock monitoring with AI-powered price predictions.

![Status](https://img.shields.io/badge/status-active-success.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14-brightgreen)
![React](https://img.shields.io/badge/react-18-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 🎯 Features

✨ **Real-Time Data**
- 🪙 Bitcoin & Ethereum prices with 24h changes
- 💱 170+ currency exchange rates  
- 📊 Top 20 S&P 500 companies tracking

📈 **Smart Predictions**
- 🔮 Linear regression stock price forecasting
- 📉 30-day price history & trend analysis
- 🎯 Predicted price changes with confidence

🎨 **Beautiful UI**
- 🌈 8 stunning theme options (Dark, Neon, Sunset, Ocean, Forest, Midnight, Cyberpunk, Pastel)
- 🎲 Random theme selector
- 📱 Fully responsive design
- ✨ Smooth animations & transitions

⚙️ **Customization**
- 🔄 Adjustable refresh intervals (30s to 5m)
- 👁️ Toggle data visibility
- 💾 Auto-saves preferences

---

## 📂 Project Structure

```
Stock Predictor/
├── backend/              # Express.js REST API (port 5000)
│   └── server.js        # All API endpoints
├── frontend/            # React Dashboard (port 3000)
│   └── src/
│       ├── App.js                    # Main component
│       ├── themes.js                 # 8 color themes
│       ├── index.css                 # Global styles
│       └── components/               # UI components
│           ├── CryptoCard.js
│           ├── CurrencyCard.js
│           ├── StocksCard.js
│           └── Settings.js
├── README_DETAILED.md    # 📖 Complete project guide (READ THIS!)
├── GITHUB_SETUP.md       # Deploy to GitHub
└── SETUP.md             # Installation guide
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js v14+ and npm

### Installation
```bash
cd "Stock Predictor"

# Backend
cd backend && npm install && cd ..

# Frontend
cd frontend && npm install && cd ..
```

### Run Application

**Option 1: Separate Terminals**
```bash
# Terminal 1 - Backend
cd backend && npm start

# Terminal 2 - Frontend  
cd frontend && npm start
```

**Option 2: Startup Script**
```bash
chmod +x start.sh && ./start.sh
```

### 🌐 Access
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

---

## 📊 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/crypto` | Bitcoin & Ethereum data |
| GET | `/api/currency` | Currency exchange rates |
| GET | `/api/stocks` | S&P 500 stocks with predictions |
| GET | `/api/dashboard` | All combined data |

---

## 🎨 Themes

Click **⚙️ Settings** → Select or **Random Theme**

1. **Dark Mode** - Professional dark with cyan accents
2. **Neon Nights** - Futuristic neon green & magenta
3. **Sunset Dream** - Warm orange & pink gradients
4. **Ocean Blue** - Cool purple-blue professional
5. **Forest Green** - Nature-inspired green & teal
6. **Midnight Purple** - Deep purple with lavender
7. **Cyberpunk** - Ultra-vibrant neon aesthetic
8. **Pastel Dreams** - Soft pastel pink & purple

---

## 📈 Stock Prediction Algorithm

Uses **linear regression** on 30-day historical data:
```
1. Collect historical prices
2. Calculate trend line (y = mx + b)
3. Extrapolate next price point
4. Return predicted price & percentage change
```

**How to use:**
- Click any stock card to expand
- View predicted price & expected change
- See 30-day high/low range

---

## 💾 Data Caching

- **Backend**: 10-minute cache (Node-Cache)
- **Frontend**: localStorage for user preferences
- **Benefits**: Faster response, fewer API calls

---

## 🔌 External APIs (All FREE ✅)

| API | Purpose | Rate Limit |
|-----|---------|-----------|
| CoinGecko | Crypto prices | 10-50/min |
| ExchangeRate-API | Currency rates | 1500/month |
| Yahoo Finance | Stock data | Moderate |

---

## ⚙️ Configuration

### Backend `.env`
```env
PORT=5000
NODE_ENV=development
```

### Frontend `.env`
```env
REACT_APP_API_URL=http://localhost:5000/api
```

---

## 📝 Key Code Comments (20%)

The project includes strategic comments on:

**Backend** (`server.js`):
- INITIALIZATION (line 8)
- API ENDPOINTS (lines 19-120)
- PREDICTION ALGORITHM (lines 125+)

**Frontend** (`App.js`):
- MAIN APP COMPONENT (line 9)
- STATE & PREFERENCES (lines 12-40)
- API CALLS & LIFECYCLE (lines 43-65)
- THEME SYSTEM (lines 88-100)

**Components**:
- Component purposes at file header
- Key functions explained
- Utility & formatter functions marked

See files for detailed comments on major functions!

---

## 🔧 Technologies

**Backend:**
- Node.js, Express.js, Axios, CORS, Node-Cache, dotenv

**Frontend:**
- React 18, Axios, Lucide Icons, CSS Grid/Flexbox

**Styling:**
- CSS3, Dynamic Theme Variables, Responsive Design

---

## 📱 Responsive Design

- **Desktop** (768px+): Full 3-column layout
- **Tablet** (568-768px): 2-column layout  
- **Mobile** (<568px): Single column

---

## 🐛 Troubleshooting

**Port already in use?**
```bash
lsof -i :5000  # Find process
kill -9 <PID>  # Kill it
```

**CORS error?** → Backend must be running on http://localhost:5000

**Theme not saving?** → Clear browser cache & localStorage

**API returns null?** → Check internet connection & API status

---

## 📖 Documentation

- **[README_DETAILED.md](./README_DETAILED.md)** - Complete project guide with code breakdown
- **[SETUP.md](./SETUP.md)** - Detailed setup instructions
- **[GITHUB_SETUP.md](./GITHUB_SETUP.md)** - Deploy to GitHub
- **[backend/README.md](./backend/README.md)** - Backend documentation
- **[frontend/README.md](./frontend/README.md)** - Frontend documentation

**👉 START HERE: [README_DETAILED.md](./README_DETAILED.md)**

---

## 🎓 What You'll Learn

- Building REST APIs with Express.js
- React hooks & state management
- Real-time data fetching with Axios
- Linear regression algorithm
- Responsive CSS design
- API caching strategies
- localStorage persistence
- Theme system implementation

---

## 🚀 Deployment

### Deploy to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo>
git push -u origin main
```

See [GITHUB_SETUP.md](./GITHUB_SETUP.md) for detailed instructions.

### Deploy Backend (Heroku)
```bash
heroku create stock-predictor-api
git push heroku main
```

### Deploy Frontend (Vercel)
```bash
cd frontend && npm run build && vercel
```

---

## 📊 Project Stats

- **Backend**: ~320 lines of code
- **Frontend**: ~800 lines of code  
- **Themes**: 8 unique designs
- **API Endpoints**: 4
- **External APIs**: 3
- **UI Components**: 4
- **Tracked Stocks**: 20
- **Supported Currencies**: 170+

---

## 📝 License

MIT License - Free for personal and commercial use

---

## 🙋 Need Help?

1. Check [README_DETAILED.md](./README_DETAILED.md) for comprehensive guide
2. Review browser console (F12) for errors
3. Check backend logs for API issues
4. Read component comments in source files

---

## 💡 Tips

- Use **Settings** to customize your dashboard
- Click stock cards to see predictions
- Switch themes in Settings for different aesthetics
- Refresh data manually or wait for auto-refresh
- Settings auto-save to browser

---

**Built with ❤️ | Stock Predictor v1.0.0**

**[📖 Full Documentation](./README_DETAILED.md) | [🚀 Setup Guide](./SETUP.md) | [🌐 GitHub](./GITHUB_SETUP.md)**
