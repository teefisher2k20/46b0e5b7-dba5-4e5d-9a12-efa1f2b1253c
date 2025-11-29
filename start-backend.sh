#!/bin/bash
echo "Starting AI Automation Studio Backend..."
echo ""

# Activate virtual environment
source venv/Scripts/activate

# Navigate to backend
cd backend

# Start the server
echo "Backend server starting on http://localhost:8000"
echo "Press Ctrl+C to stop"
echo ""
python main.py
