import { useEffect } from "react";

function MouseTrail() {
  useEffect(() => {
    const handleMove = (e) => {
      const spark = document.createElement("div");

      spark.className = "sparkle";
      spark.style.left = `${e.pageX}px`;
      spark.style.top = `${e.pageY}px`;

      document.body.appendChild(spark);

      setTimeout(() => {
        spark.remove();
      }, 600);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return null;
}

export default MouseTrail;