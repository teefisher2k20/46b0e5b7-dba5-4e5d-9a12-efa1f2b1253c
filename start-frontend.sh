#!/bin/bash
echo "Starting AI Automation Studio Frontend..."
echo ""

# Navigate to frontend
cd frontend

# Check if node_modules exists, if not, install
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies (this may take a minute)..."
    npm install
fi

# Start dev server
echo "Frontend dev server starting..."
echo "Press Ctrl+C to stop"
echo ""
npm run dev
