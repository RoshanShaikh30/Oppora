from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
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