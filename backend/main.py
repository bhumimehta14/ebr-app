from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

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
