import { useEffect, useState } from "react";

function Home() {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/opportunities")
      .then((res) => res.json())
      .then((data) => setOpportunities(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Oppora</h1>

      <h2>Latest Opportunities</h2>

      {opportunities.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #333",
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "10px",
          }}
        >

          <h3>{item.title}</h3>

          <p>{item.location}</p>

          <p>Prize: ${item.prize_usd}</p>

          <p>{item.description}</p>

          <a
            href={item.url}
            target="_blank"
          >
            Apply →
          </a>
        </div>
      ))}
    </div>
  );
}

export default Home;