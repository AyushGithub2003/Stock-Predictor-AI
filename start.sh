#!/bin/bash

echo "Starting Stock Predictor App..."
echo ""

cd "$(dirname "$0")/backend"
echo "Starting backend server on port 5000..."
npm start &
BACKEND_PID=$!

cd "$(dirname "$0")/frontend"
echo "Starting frontend server on port 3000..."
npm start &
FRONTEND_PID=$!

echo ""
echo "✅ Backend running at http://localhost:5000"
echo "✅ Frontend running at http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop all servers"
echo ""

wait
