from services.openai_service import generate_text
from services import synthesys, heygen, deepbrain, jasper, zapier, monkeylearn, google_vision, dialogflow, textcortex
import json

def process_request(prompt: str):
    # 1. Analyze prompt to determine intent and tools
    # For now, we will use a simple heuristic or just ask OpenAI to categorize
    analysis_prompt = f"Analyze this request and list the necessary steps/tools: {prompt}"
    plan_text = generate_text(analysis_prompt)
    
    # 2. Mock execution of tools based on keywords (since we don't have real LLM parsing to function calls yet)
    results = {}
    
    if "video" in prompt.lower():
        results["synthesys"] = synthesys.execute({"text": prompt})
        results["heygen"] = heygen.execute({"text": prompt})
        
    if "text" in prompt.lower() or "write" in prompt.lower():
        results["jasper"] = jasper.execute({"topic": prompt})
        
    return {
        "status": "success",
        "plan": {"analysis": plan_text},
        "results": results
    }
