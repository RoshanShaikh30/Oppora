import { useState } from "react";

function SelfHealingPanel() {
  const [healing, setHealing] = useState(false);
  const [result, setResult] = useState(null);

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

  return (
    <div className="health-card">
      <h2>Self-Healing Engine</h2>

      {!healing && (
        <button onClick={runHealing}>
          Run Recovery
        </button>
      )}

      {healing && (
        <p>Recovering missing fields...</p>
      )}

      {result && (
        <>
          <p>{result.message}</p>

          <p>
            Health Score:
            {" "}
            {result.report.health_score}
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