from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from deepface import DeepFace
import shutil
import os

app = FastAPI()

# Allows the React frontend to talk to this Python backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/verify")
async def verify_face(file: UploadFile = File(...)):
    if not os.path.exists("temp"): os.makedirs("temp")
    temp_path = f"temp/{file.filename}"
    
    with open(temp_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    try:
        # It looks into backend/database/ for a match
        results = DeepFace.find(img_path=temp_path, db_path="./database", enforce_detection=False)
        os.remove(temp_path)
        
        if len(results) > 0 and not results[0].empty:
            return {"status": "success", "user": "Authorized User"}
        return {"status": "unknown", "user": "Access Denied"}
    except Exception as e:
        return {"status": "error", "message": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)