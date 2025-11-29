# AI Automation Studio

A powerful AI-powered task automation generator that integrates various AI tools to help you create content, analyze data, and automate workflows.

## Features

- ��� **Modern UI**: Beautiful, responsive interface with glassmorphism design
- ��� **AI-Powered**: Leverages OpenAI and other AI services
- ��� **Multiple Categories**: Ideas, Design, Video, Analytics, and more
- ⚡ **Real-time Processing**: Instant feedback and results
- ��� **Smart Routing**: Automatically selects the right tools for your task

## Tech Stack

### Backend
- FastAPI (Python web framework)
- OpenAI API
- Multiple AI service integrations

### Frontend
- React + TypeScript
- Vite (build tool)
- Modern CSS with custom design system

## Getting Started

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### Installation

1. **Clone the repository** (if using git)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Set up the backend**
   ```bash
   # Activate virtual environment
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate

   # Install dependencies (already done)
   pip install -r backend/requirements.txt

   # Create .env file
   cp backend/.env.example backend/.env
   # Edit backend/.env and add your API keys
   ```

3. **Set up the frontend**
   ```bash
   cd frontend
   npm install  # Already done
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   # From project root, with venv activated
   cd backend
   python main.py
   # Server will run on http://localhost:8000
   ```

2. **Start the frontend dev server** (in a new terminal)
   ```bash
   cd frontend
   npm run dev
   # App will run on http://localhost:5173
   ```

3. **Open your browser**
   Navigate to `http://localhost:5173`

## API Configuration

You need to configure API keys in `backend/.env`:

- **Required**: `OPENAI_API_KEY` - Get from https://platform.openai.com/
- **Optional**: Other AI service keys for extended functionality

## Project Structure

```
.
├── backend/
│   ├── main.py              # FastAPI application
│   ├── requirements.txt     # Python dependencies
│   ├── services/            # AI service wrappers
│   │   ├── openai_service.py
│   │   ├── generator_service.py
│   │   └── ...
│   └── models/              # Pydantic models
│       └── schemas.py
├── frontend/
│   ├── src/
│   │   ├── pages/           # React pages
│   │   │   └── Dashboard.tsx
│   │   ├── services/        # API client
│   │   │   └── api.ts
│   │   ├── App.tsx
│   │   └── index.css        # Design system
│   └── package.json
└── README.md
```

## Usage

1. Select a category (optional) - Ideas, Design, Video, etc.
2. Enter your task description in the text area
3. Click "Generate with AI"
4. View the AI analysis and tool outputs

## Development

### Backend Development
- API docs available at `http://localhost:8000/docs`
- Add new AI services in `backend/services/`
- Update `generator_service.py` to integrate new tools

### Frontend Development
- Hot reload enabled by default
- Customize design in `frontend/src/index.css`
- Add new pages in `frontend/src/pages/`

## License

MIT License - feel free to use this project for your own purposes.
