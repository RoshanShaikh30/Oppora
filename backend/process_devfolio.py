import json

with open("../data/devfolio_raw.json", "r", encoding="utf-8") as f:
    data = json.load(f)

processed = []

for item in data:
    processed.append({
        "title": item.get("title", ""),
        "organizer": item.get("organizer", ""),
        "deadline": item.get("deadline", ""),
        "location": item.get("location", ""),
        "prize_usd": item.get("prizes", {}).get("value", 0) if item.get("prizes") else 0,
        "description": item.get("description", ""),
        "source": "Devfolio",
        "url": item.get("product_page_url", "")
    })

with open("../data/devfolio_processed.json", "w", encoding="utf-8") as f:
    json.dump(processed, f, indent=2)

print(f"Processed {len(processed)} opportunities")