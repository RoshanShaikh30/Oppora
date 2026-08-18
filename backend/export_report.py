import json

with open("../data/devfolio_processed.json", "r", encoding="utf-8") as f:
    opportunities = json.load(f)

total = len(opportunities)

missing_deadlines = 0
missing_prizes = 0
missing_locations = 0
suspicious_organizers = 0

for opp in opportunities:

    if not opp.get("deadline"):
        missing_deadlines += 1

    if not opp.get("prize_usd"):
        missing_prizes += 1

    if not opp.get("location"):
        missing_locations += 1

    organizer = opp.get("organizer", "").lower()

    if (
        "code of conduct" in organizer
        or organizer == ""
    ):
        suspicious_organizers += 1

issues = (
    missing_deadlines
    + missing_prizes
    + missing_locations
    + suspicious_organizers
)

health_score = max(
    0,
    round(
        100 - ((issues / (total * 4)) * 100)
    )
)

report = {
    "total_opportunities": total,
    "missing_deadlines": missing_deadlines,
    "missing_prizes": missing_prizes,
    "missing_locations": missing_locations,
    "suspicious_organizers": suspicious_organizers,
    "health_score": health_score
}

with open("../data/health_report.json", "w", encoding="utf-8") as f:
    json.dump(report, f, indent=2)

print("\nHealth report generated successfully.")
print(report)