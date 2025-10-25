# Project Setup Instructions

## First Time Setup

### 1. Install Dependencies

```bash
cd "Stock Predictor"

# Backend
cd backend
npm install
cd ..

# Frontend
cd frontend
npm install
cd ..
```

### 2. Configure Environment Variables

All `.env` files are already created based on `.env.example` files.

**Backend (.env):**
```
PORT=5000
NODE_ENV=development
```

**Frontend (.env):**
```
REACT_APP_API_URL=http://localhost:5000/api
```

If you need to modify any settings, edit the `.env` files in each directory.

## Running the Application

### Method 1: Using Separate Terminals (Recommended for Development)

**Terminal 1 - Backend:**
```bash
cd "Stock Predictor/backend"
npm start
```

**Terminal 2 - Frontend:**
```bash
cd "Stock Predictor/frontend"
npm start
```

**Result:**
- Backend API: http://localhost:5000
- Frontend UI: http://localhost:3000

### Method 2: Using the Startup Script

```bash
cd "Stock Predictor"
chmod +x start.sh
./start.sh
```

This will start both servers in the background.

### Method 3: Root Level Commands

If you installed dependencies at the root level:

```bash
cd "Stock Predictor"
npm run dev
```

## Folder Structure

```
Stock Predictor/
│
├── backend/                    # Express.js API Server
│   ├── server.js              # Main server file
│   ├── package.json           # Dependencies
│   ├── .env                   # Environment variables (DO NOT COMMIT)
│   ├── .env.example           # Environment template (commit this)
│   ├── .gitignore             # Git ignore rules
│   └── README.md              # Backend documentation
│
├── frontend/                   # React Dashboard
│   ├── src/
│   │   ├── App.js             # Main app component
│   │   ├── index.js           # React entry point
│   │   ├── index.css          # Global styles
│   │   └── components/
│   │       ├── CryptoCard.js  # Cryptocurrency component
│   │       ├── CurrencyCard.js # Currency component
│   │       └── StocksCard.js  # Stocks component
│   ├── public/
│   ├── package.json           # Dependencies
│   ├── .env                   # Environment variables (DO NOT COMMIT)
│   ├── .env.example           # Environment template (commit this)
│   ├── .gitignore             # Git ignore rules
│   └── README.md              # Frontend documentation
│
├── start.sh                   # Script to start both servers
├── package.json               # Root package.json
├── README.md                  # Main documentation
├── SETUP.md                   # This file
├── GITHUB_SETUP.md            # GitHub deployment guide
└── .gitignore                 # Root git ignore
```

## File Descriptions

### Backend Files

- **server.js**: Main Express server with all API endpoints
  - `/api/crypto` - Cryptocurrency data
  - `/api/currency` - Currency exchange rates
  - `/api/stocks` - S&P 500 stocks with predictions
  - `/api/dashboard` - Combined data

### Frontend Components

- **App.js**: Main React component that orchestrates the dashboard
- **CryptoCard.js**: Displays Bitcoin and Ethereum data
- **CurrencyCard.js**: Shows currency exchange rates with expandable list
- **StocksCard.js**: Lists S&P 500 stocks with prediction details

## Key Features

✅ Real-time cryptocurrency prices (Bitcoin, Ethereum)
✅ 170+ currency exchange rates against USD
✅ S&P 500 top 20 companies stock tracking
✅ Linear regression stock price predictions
✅ Auto-refresh every 60 seconds
✅ Responsive UI with gradient design
✅ Interactive expandable stock cards
✅ Color-coded gainers and losers

## External APIs Used

1. **CoinGecko** (Free) - Cryptocurrency data
   - No API key required
   - Rate limit: 10-50 calls/minute

2. **ExchangeRate-API** (Free) - Currency rates
   - No API key required
   - Rate limit: 1500 requests/month

3. **Yahoo Finance** (Free) - Stock data
   - No API key required
   - May have rate limits

## Troubleshooting

### Port Already in Use

If you get "Port 5000 already in use" or "Port 3000 already in use":

```bash
# Find process using port
lsof -i :5000  # For backend
lsof -i :3000  # For frontend

# Kill the process
kill -9 <PID>
```

### CORS Error

Make sure the backend is running on http://localhost:5000 before starting the frontend.

### API Returns 500 Error

- Check that external APIs are accessible
- Verify internet connection
- Check backend console for error messages

### Blank Frontend

- Open browser console (F12) to check for errors
- Verify backend is running
- Check that `REACT_APP_API_URL` in frontend/.env is correct

## Git Commands

See [GITHUB_SETUP.md](./GITHUB_SETUP.md) for detailed GitHub setup instructions.

Quick git commands:
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push origin main
```

## Next Steps

1. ✅ Understand the project structure
2. ✅ Install dependencies
3. ✅ Run the application locally
4. ✅ Set up GitHub repositories (see GITHUB_SETUP.md)
5. ✅ Make your first commit
6. 📈 Deploy to production
7. 🎯 Add more features

## Common Issues

### Node modules not installed
```bash
cd backend && npm install
cd ../frontend && npm install
```

### Changes not reflecting
- Hard refresh browser: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)
- Clear npm cache: `npm cache clean --force`
- Restart development servers

### Environment variables not loading
- Restart the development server after changing `.env`
- Make sure you're using the correct `.env` format
- No spaces around `=` in `.env` files

## Support

For issues:
1. Check the README.md files in backend/ and frontend/
2. Review the error messages in the console
3. Check external API status pages
4. Refer to GITHUB_SETUP.md for Git/GitHub issues
