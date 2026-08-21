import Navbar from "../components/Navbar";
import OpportunityCard from "../components/OpportunityCard";
import { useEffect, useState } from "react";
import SelfHealingPanel from "../components/SelfHealingPanel";

function Home() {
  const [opportunities, setOpportunities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [health, setHealth] = useState(null);
  // const [autoHeal, setAutoHeal] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/opportunities")
      .then((res) => res.json())
      .then((data) => setOpportunities(data))
      .catch((err) => console.error(err));

    fetch("http://127.0.0.1:8000/api/health")
      .then((res) => res.json())
      .then((data) => setHealth(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredOpportunities = opportunities.filter((item) =>
  item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  item.location?.toLowerCase().includes(searchTerm.toLowerCase())
   );

  return (
  <>
    <Navbar />

    <div className="container">
      <h1 className="hero-title">Latest Opportunities</h1>

       <p>
    {filteredOpportunities.length} Opportunities Found
  </p>

  {health && (
  <div className="health-card">
    <h2>Data Health Score</h2>

    <h1>{health.health_score}/100</h1>

    <div className="health-stats">
      <p>Opportunities: {health.total_opportunities}</p>
      <p>Missing Deadlines: {health.missing_deadlines}</p>
      <p>Missing Prizes: {health.missing_prizes}</p>
    </div>
  </div>
)}

   <SelfHealingPanel />

  <input
    type="text"
    placeholder="Search opportunities..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="search-input"
  />

      <div className="cards-grid">
        {filteredOpportunities.map((item, index) => (
          <OpportunityCard
            key={index}
            item={item}
          />
        ))}
      </div>
    </div>
  </>
);
}

export default Home;