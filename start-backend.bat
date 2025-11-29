@echo off
echo Starting AI Automation Studio Backend...
echo.

REM Activate virtual environment
call venv\Scripts\activate.bat

REM Navigate to backend
cd backend

REM Start the server
echo Backend server starting on http://localhost:8000
echo Press Ctrl+C to stop
echo.
python main.py
