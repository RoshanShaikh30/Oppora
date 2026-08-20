import { useEffect, useState } from "react";

function Health() {
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/health")
      .then((res) => res.json())
      .then((data) => setReport(data));
  }, []);

  if (!report) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Data Health Report</h1>

      <p>Total Opportunities: {report.total_opportunities}</p>

      <p>Missing Deadlines: {report.missing_deadlines}</p>

      <p>Missing Prizes: {report.missing_prizes}</p>

      <p>Missing Locations: {report.missing_locations}</p>

      <p>Suspicious Organizers: {report.suspicious_organizers}</p>

      <h2>Health Score: {report.health_score}/100</h2>
    </div>
  );
}

export default Health;