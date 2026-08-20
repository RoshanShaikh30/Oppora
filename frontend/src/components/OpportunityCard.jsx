function OpportunityCard({ item }) {
  return (
    <div className="card">
      <h3>{item.title}</h3>

      <p>{item.location}</p>

      <p>Prize: ${item.prize_usd}</p>

      <p>{item.description}</p>

      <span className="badge">
        {item.source}
      </span>

      <br />
      <br />

      <a href={item.url} target="_blank">
        Apply →
      </a>
    </div>
  );
}

export default OpportunityCard;