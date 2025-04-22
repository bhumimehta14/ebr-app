from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/upload")
async def upload_file(file: UploadFile = File(...)):
    return {"filename": file.filename, "status": "mock-upload-success"}

@app.post("/api/ocr")
async def mock_ocr(file: UploadFile = File(...)):
    return {"text": "Mock OCR result for testing."}

@app.get("/", response_class=HTMLResponse)
async def root():
    return "<h1>✅ EBR Backend is running!</h1>"

@app.get("/api/recipes")
def get_recipes():
    return [{"name": "Example Recipe", "steps": ["Step 1", "Step 2"]}]
