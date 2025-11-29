from pydantic import BaseModel
from typing import Optional, List, Dict, Any

class GenerateRequest(BaseModel):
    prompt: str
    category: Optional[str] = None

class GenerateResponse(BaseModel):
    status: str
    plan: Dict[str, Any]
    results: Dict[str, Any]
