# Ì∫Ä Quick Start Guide - AI Automation Studio

## ‚úÖ FIXED: Easy Startup Scripts Created!

I've created simple startup scripts to avoid command-line errors.

---

## ÌæØ How to Start the Application

### **Method 1: Using Startup Scripts (EASIEST)**

#### **Step 1: Start the Backend**

Open a terminal (Command Prompt, PowerShell, or Git Bash) and run:

**If using Command Prompt or PowerShell:**
```cmd
cd c:\Users\Terrance\.gemini\antigravity\brain\46b0e5b7-dba5-4e5d-9a12-efa1f2b1253c
start-backend.bat
```

**If using Git Bash:**
```bash
cd /c/Users/Terrance/.gemini/antigravity/brain/46b0e5b7-dba5-4e5d-9a12-efa1f2b1253c
bash start-backend.sh
```

You should see:
```
Starting AI Automation Studio Backend...
Backend server starting on http://localhost:8000
INFO:     Uvicorn running on http://0.0.0.0:8000
```

‚úÖ **Leave this terminal open!**

---

#### **Step 2: Start the Frontend**

Open a **NEW** terminal and run:

**If using Command Prompt or PowerShell:**
```cmd
cd c:\Users\Terrance\.gemini\antigravity\brain\46b0e5b7-dba5-4e5d-9a12-efa1f2b1253c
start-frontend.bat
```

**If using Git Bash:**
```bash
cd /c/Users/Terrance/.gemini/antigravity/brain/46b0e5b7-dba5-4e5d-9a12-efa1f2b1253c
bash start-frontend.sh
```

You should see:
```
Starting AI Automation Studio Frontend...
VITE ready in XXX ms
‚ûú  Local:   http://localhost:5173/
```

‚úÖ **Leave this terminal open too!**

---

#### **Step 3: Open in Browser**

Navigate to: **http://localhost:5173**

---

### **Method 2: Manual Commands (If scripts don't work)**

#### **Backend:**
```bash
cd c:/Users/Terrance/.gemini/antigravity/brain/46b0e5b7-dba5-4e5d-9a12-efa1f2b1253c
source venv/Scripts/activate
cd backend
python main.py
```

#### **Frontend (in new terminal):**
```bash
cd c:/Users/Terrance/.gemini/antigravity/brain/46b0e5b7-dba5-4e5d-9a12-efa1f2b1253c/frontend
npm run dev
```

---

## Ì¥ß Troubleshooting

### **Error: "bash: venvScriptsactivate: command not found"**
‚úÖ **FIXED!** Use the startup scripts instead:
- `start-backend.bat` (for CMD/PowerShell)
- `start-backend.sh` (for Git Bash)

### **Error: Vite configuration error**
This usually means:
1. **Missing dependencies** - Run: `cd frontend && npm install`
2. **Node version issue** - Make sure you have Node.js 16+ installed
3. **Port already in use** - Close any other Vite/React apps

To fix:
```bash
cd frontend
npm install
npm run dev
```

### **Error: "OPENAI_API_KEY not set"**
Make sure you've added your API key to `backend/.env`:
```env
OPENAI_API_KEY=sk-your-actual-key-here
```

### **Backend won't start**
1. Make sure virtual environment is activated
2. Check Python version: `python --version` (should be 3.8+)
3. Reinstall dependencies: `pip install -r backend/requirements.txt`

### **Frontend shows blank page**
1. Check browser console for errors (F12)
2. Make sure backend is running on port 8000
3. Try clearing browser cache

---

## Ì≥Å Project Files

**Startup Scripts:**
- `start-backend.bat` - Windows batch script
- `start-backend.sh` - Bash script for Git Bash
- `start-frontend.bat` - Windows batch script
- `start-frontend.sh` - Bash script for Git Bash

**Configuration:**
- `backend/.env` - API keys (you need to add your OpenAI key here)
- `backend/main.py` - Backend server
- `frontend/src/` - Frontend source code

---

## Ìæ® Using the Application

1. **Select a category** (optional) - Click any of the 8 colorful cards
2. **Enter your task** - Describe what you want to create
3. **Click "Generate with AI"** - Wait for the magic!
4. **View results** - See the AI analysis and tool outputs

**Example prompts to try:**
- "Create a marketing video for a new product launch"
- "Generate social media content ideas for a tech startup"
- "Write a blog post about AI automation"
- "Analyze user engagement trends"

---

## Ìªë Stopping the Application

Press `Ctrl+C` in each terminal window to stop the servers.

---

## ‚úÖ Checklist

Before starting, make sure:
- [ ] OpenAI API key is added to `backend/.env`
- [ ] Python virtual environment exists (`venv` folder)
- [ ] Frontend dependencies are installed (`frontend/node_modules` exists)
- [ ] You have two terminal windows ready

---

## Ì∂ò Still Having Issues?

1. **Check Node.js version**: `node --version` (need 16+)
2. **Check Python version**: `python --version` (need 3.8+)
3. **Reinstall frontend**: `cd frontend && rm -rf node_modules && npm install`
4. **Reinstall backend**: `pip install -r backend/requirements.txt`

---

**Ready to go? Run the startup scripts and enjoy your AI Automation Studio! Ìæâ**
