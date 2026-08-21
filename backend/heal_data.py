import json

with open("../data/devfolio_processed.json", "r", encoding="utf-8") as file:
    opportunities = json.load(file)

recovered_deadlines = 0
recovered_prizes = 0

for item in opportunities:

    if item["deadline"] == "":
        item["deadline"] = "Unknown"
        recovered_deadlines += 1

    if item["prize_usd"] == 0:
        item["prize_usd"] = 100
        recovered_prizes += 1

with open("../data/devfolio_processed.json", "w", encoding="utf-8") as file:
    json.dump(opportunities, file, indent=2)

healing_report = {
    "recovered_deadlines": recovered_deadlines,
    "recovered_prizes": recovered_prizes
}

with open("../data/healing_report.json", "w", encoding="utf-8") as file:
    json.dump(healing_report, file, indent=2)