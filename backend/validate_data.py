import json

with open("../data/devfolio_processed.json", "r", encoding="utf-8") as f:
    opportunities = json.load(f)

missing_deadline = 0
missing_prize = 0
missing_location = 0
suspicious_organizer = 0

for opp in opportunities:

    if not opp.get("deadline"):
        missing_deadline += 1

    if not opp.get("prize_usd"):
        missing_prize += 1

    if not opp.get("location"):
        missing_location += 1

    organizer = opp.get("organizer", "").lower()

    if (
        "code of conduct" in organizer
        or organizer == ""
    ):
        suspicious_organizer += 1

print("\nOPPORA VALIDATION REPORT\n")

print(f"Total Opportunities: {len(opportunities)}")
print(f"Missing Deadlines: {missing_deadline}")
print(f"Missing Prizes: {missing_prize}")
print(f"Missing Locations: {missing_location}")
print(f"Suspicious Organizers: {suspicious_organizer}")