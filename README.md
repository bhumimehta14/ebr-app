# EBR App

A full-stack Electronic Batch Record (EBR) application.

## Setup

### Backend
```bash
cd backend
python -m venv env
source env/bin/activate  # or .\env\Scripts\activate on Windows
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm start
```
