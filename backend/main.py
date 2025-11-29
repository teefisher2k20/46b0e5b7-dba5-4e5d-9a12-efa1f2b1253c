from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models.schemas import GenerateRequest, GenerateResponse
from services.generator_service import process_request
import uvicorn

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/generate", response_model=GenerateResponse)
def generate(request: GenerateRequest):
    try:
        result = process_request(request.prompt)
        return GenerateResponse(
            status=result["status"],
            plan=result["plan"],
            results=result["results"]
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
