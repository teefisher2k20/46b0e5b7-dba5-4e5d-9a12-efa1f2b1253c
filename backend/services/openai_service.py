import os
from dotenv import load_dotenv

load_dotenv()

def generate_text(prompt: str):
    """
    Generate text using OpenAI API.
    Falls back to a mock response if OpenAI is not configured.
    """
    api_key = os.getenv("OPENAI_API_KEY")
    
    # If no API key, return a helpful mock response
    if not api_key or api_key == "your_openai_api_key_here":
        return f"[Mock AI Response] I would analyze this task: '{prompt}' and suggest using appropriate AI tools for video creation, content generation, and automation."
    
    try:
        from openai import OpenAI
        client = OpenAI(api_key=api_key)
        
        response = client.chat.completions.create(
            model="gpt-4",
            messages=[{"role": "user", "content": prompt}]
        )
        return response.choices[0].message.content
    except ImportError:
        # OpenAI library not installed
        return f"[Mock AI Response] OpenAI library not installed. Task: '{prompt}' - Would suggest video tools, content generators, and automation services."
    except Exception as e:
        print(f"Error generating text: {e}")
        return f"[AI Service Error] Could not process request. Please check your API key configuration."
