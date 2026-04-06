import { useEffect, useRef } from "react";

export default function StarField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const starCount = 80;
    const colors = [
      "rgba(240,237,230,",   // star white
      "rgba(240,237,230,",
      "rgba(240,237,230,",
      "rgba(91,184,130,",    // jade
      "rgba(232,192,96,",    // gold
    ];

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;

      const color = colors[Math.floor(Math.random() * colors.length)];
      const opacity = 0.3 + Math.random() * 0.5;
      star.style.background = `${color}${opacity})`;

      const size = 1 + Math.random() * 1.5;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      container.appendChild(star);
    }
  }, []);

  return (
    <>
      <div ref={containerRef} className="stars" />
      <div className="nebula" style={{ top: "-200px", left: "-100px" }} />
      <div
        className="nebula"
        style={{
          bottom: "-200px",
          right: "-100px",
          background: "radial-gradient(circle, rgba(61,138,95,0.05) 0%, transparent 70%)",
          animationDelay: "-10s",
        }}
      />
    </>
  );
}
