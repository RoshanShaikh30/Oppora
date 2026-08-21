from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from subprocess import run
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/opportunities")
def get_opportunities():
    with open("../data/devfolio_processed.json", "r", encoding="utf-8") as file:
        data = json.load(file)

    return data


@app.get("/api/health")
def get_health():
    with open("../data/health_report.json", "r", encoding="utf-8") as file:
        data = json.load(file)

    return data

@app.post("/api/heal")
def heal_data():

    run(["python", "heal_data.py"])
    
    run(["python", "validate_data.py"])

    run(["python", "export_report.py"])

    with open("../data/health_report.json", "r", encoding="utf-8") as file:
        report = json.load(file)
        
    with open("../data/healing_report.json", "r", encoding="utf-8") as file:
        healing_report = json.load(file)

    return {
        "message": "Healing complete",
        "report": report,
        "healing_report": healing_report
    }
    
@app.post("/api/auto-heal")
def auto_heal():

    import subprocess

    subprocess.run(
        ["python", "recover_data.py"]
    )

    with open("../data/health_report.json", "r") as file:
        report = json.load(file)

    return {
        "message": "Auto-healing completed",
        "report": report
    }