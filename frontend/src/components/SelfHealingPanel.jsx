import { useEffect, useState } from "react";

function SelfHealingPanel() {
  const [healing, setHealing] = useState(false);
  const [result, setResult] = useState(null);
  const [autoHeal, setAutoHeal] = useState(false);

  const runHealing = async () => {
    setHealing(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/heal",
        {
          method: "POST",
        }
      );

      const data = await response.json();

      setResult(data);
    } catch (error) {
      console.error(error);
    }

    setHealing(false);
  };

  useEffect(() => {
  if (autoHeal) {
    runHealing();
  }
}, [autoHeal]);

  return (
    <div className="health-card">
      <h2>Self-Healing Engine</h2>

      <label
  style={{
    display: "block",
    marginBottom: "1rem",
    fontSize: "1.1rem",
  }}
>
  <input
    type="checkbox"
    checked={autoHeal}
    onChange={() => setAutoHeal(!autoHeal)}
  />
  {" "}Auto-Heal Mode
</label>

{autoHeal && (
  <p style={{ color: "#4ade80" }}>
    Auto-Heal Enabled
  </p>
)}

      {!healing && (
        <button className="heal-btn" onClick={runHealing}>
          Run Recovery
        </button>
      )}

      {healing && (
        <p>Analyzing data... 
          <br /> Repairing missing fields... 
          <br /> Regenerating health report...
        </p>
      )}

      {result && (
  <>
    <h3>Recovery Complete</h3>

    <p>
      <strong>New Health Score:</strong>{" "}
       
      {result.report.health_score}/100
    </p>

    <p>
      <strong>Total Opportunities:</strong>{" "}
      {result.report.total_opportunities}
    </p>

    <p>
      <strong>Missing Deadlines:</strong>{" "}
      {result.report.missing_deadlines}
    </p>

    <p>
      <strong>Missing Prizes:</strong>{" "}
      {result.report.missing_prizes}
    </p>

    <p>
      <strong>Suspicious Organizers:</strong>{" "}
      {result.report.suspicious_organizers}
    </p>
    </>
    )}
    </div>
  );
}

export default SelfHealingPanel;

// import { useState } from "react";

// function SelfHealingPanel() {
//   const [healing, setHealing] = useState(false);
//   const [complete, setComplete] = useState(false);

//   const runHealing = () => {
//     setHealing(true);

//     setTimeout(() => {
//       setHealing(false);
//       setComplete(true);
//     }, 3000);
//   };

//   return (
//     <div className="health-card">
//       <h2>Self-Healing Engine</h2>

//       {!healing && !complete && (
//         <button onClick={runHealing}>
//           Run Recovery
//         </button>
//       )}

//       {healing && (
//         <p>Recovering missing fields...</p>
//       )}

//       {complete && (
//         <>
//           <p>Recovered Deadlines: 8</p>
//           <p>Recovered Prizes: 5</p>
//           <p>New Health Score: 58/100</p>
//         </>
//       )}
//     </div>
//   );
// }

// export default SelfHealingPanel;