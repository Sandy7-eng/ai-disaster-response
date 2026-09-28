from fastapi import FastAPI

app = FastAPI(
    title="AI Disaster Response Assistant API",
    description="Backend API for the Disaster Response Assistant",
    version="0.1.0"
)

@app.get("/")
def read_root():
    return {"message": "Welcome to the AI Disaster Response Assistant API!"}

@app.get("/health")
def health_check():
    return {"status": "ok"}
