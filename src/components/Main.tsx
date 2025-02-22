export default function Main() {
  const handleZoneClick = (zoneName: string) => {
    alert(`Hiciste clic en: ${zoneName}`);
  };

  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        style={{ width: "100%", height: "auto" }}
      >
        {/* Gualanday zone */}

        {/* polygon f6 */}
        <polygon
          points="0, 45 7, 45 7, 40 4, 40, 4, 42, 0, 42"
          fill="#9b59b6"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#8e44ad")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#9b59b6")}
          onClick={() => handleZoneClick("f6")}
        />

        {/* polygon f5 */}
        <polygon
          points="9, 46 12, 46 12, 43 9, 43"
          fill="#9b59b6"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#8e44ad")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#9b59b6")}
          onClick={() => handleZoneClick("f5")}
        />

        {/* polygon f4 */}
        <polygon
          points="9, 42 15, 42 15, 38 20, 38 20, 34 14, 34 14, 36 9, 36"
          fill="#9b59b6"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#8e44ad")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#9b59b6")}
          onClick={() => handleZoneClick("f4")}
        />

        {/* polygon f3 */}
        <polygon
          points="21, 31 26, 36 30, 32 25, 27"
          fill="#9b59b6"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#8e44ad")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#9b59b6")}
          onClick={() => handleZoneClick("f3")}
        />

        {/* polygon f2 */}
        <polygon
          points="32, 32 32, 34 34, 34 36, 36 39, 30 36, 28 33, 32"
          fill="#9b59b6"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#8e44ad")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#9b59b6")}
          onClick={() => handleZoneClick("f2")}
        />

        {/* polygon f1 */}
        <polygon
          points="28, 26 30, 28 32, 26 32, 30 36, 26 40, 26 40, 16 32, 16 32, 20"
          fill="#9b59b6"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#8e44ad")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#9b59b6")}
          onClick={() => handleZoneClick("f1")}
        />

        {/* Guamos zone */}

        {/* polygon d2 */}
        <polygon
          points="84, 4 82, 9 90, 10 92, 5"
          fill="#64b5f6"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#1976d2")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#64b5f6")}
          onClick={() => handleZoneClick("d2")}
        />

        {/* polygon d3 */}
        <polygon
          points="50, 0 53, 2 50, 4 47, 2"
          fill="#64b5f6"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#1976d2")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#64b5f6")}
          onClick={() => handleZoneClick("d3")}
        />

        {/* polygon d4 */}
        <polygon
          points="46, 14 50, 20 58, 14 54, 8"
          fill="#64b5f6"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#1976d2")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#64b5f6")}
          onClick={() => handleZoneClick("d4")}
        />

        {/* Platanillas zone */}
      </svg>
    </div>
  );
}
