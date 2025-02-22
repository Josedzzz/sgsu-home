export default function Main() {
  const handleZoneClick = (zoneName: string) => {
    alert(`Hiciste clic en: ${zoneName}`);
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        border: "1px solid #ccc",
      }}
    >
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

        {/* polygon e1 */}
        <polygon
          points="75, 9 76, 12 80, 11 79, 8"
          fill="#ef5350"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#d32f2f")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#ef5350")}
          onClick={() => handleZoneClick("e1")}
        />

        {/* polygon e2 */}
        <polygon
          points="70, 11 71, 14 75, 13 74, 10"
          fill="#ef5350"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#d32f2f")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#ef5350")}
          onClick={() => handleZoneClick("e2")}
        />

        {/* polygon e3 */}
        <polygon
          points="58, 5 62, 11 74, 9 72, 3"
          fill="#ef5350"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#d32f2f")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#ef5350")}
          onClick={() => handleZoneClick("e3")}
        />

        {/* polygon e4 */}
        <polygon
          points="62, 12 63, 15 70, 14 69, 11"
          fill="#ef5350"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#d32f2f")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#ef5350")}
          onClick={() => handleZoneClick("e4")}
        />

        {/* Cambulos zone */}

        {/* polygon c10 */}
        <polygon
          points="98, 9 94, 18 89, 17 94, 7"
          fill="#ffa726"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#f57c00")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#ffa726")}
          onClick={() => handleZoneClick("c10")}
        />

        {/* circle c9 */}
        <circle
          cx="80"
          cy="18"
          r="3"
          fill="#ffa726"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#f57c00")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#ffa726")}
          onClick={() => handleZoneClick("c9")}
        />

        {/* polygon c7 */}
        <polygon
          points="55, 28 70, 49 85, 44 70, 23"
          fill="#ffa726"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#f57c00")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#ffa726")}
          onClick={() => handleZoneClick("c7")}
        />

        {/* polygon c6 */}
        <polygon
          points="84, 35 88, 40 92, 38 89, 34"
          fill="#ffa726"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#f57c00")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#ffa726")}
          onClick={() => handleZoneClick("c6")}
        />

        {/* polygon c5 */}
        <polygon
          points="80, 47 87, 58 93, 56 86, 45"
          fill="#ffa726"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#f57c00")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#ffa726")}
          onClick={() => handleZoneClick("c5")}
        />

        {/* polygon c4 */}
        <polygon
          points="72, 50 79, 61 85, 59 78, 48"
          fill="#ffa726"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#f57c00")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#ffa726")}
          onClick={() => handleZoneClick("c4")}
        />

        {/* polygon c2 */}
        <polygon
          points="80, 62 83, 66 96, 62 93, 58"
          fill="#ffa726"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#f57c00")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#ffa726")}
          onClick={() => handleZoneClick("c2")}
        />

        {/* polygon c1 */}
        <polygon
          points="80, 67 80, 72 90, 72 90, 67"
          fill="#ffa726"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#f57c00")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#ffa726")}
          onClick={() => handleZoneClick("c2")}
        />

        {/* Guayacan zone */}

        {/* polygon a1 */}
        <polygon
          points="65, 80 71, 85 80, 80 80, 75 70, 80"
          fill="#ffeb3b"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#fbc02d")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#ffeb3b")}
          onClick={() => handleZoneClick("a1")}
        />

        {/* polygon a2 */}
        <polygon
          points="82, 75 82, 85 90, 85 90, 75"
          fill="#ffeb3b"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#fbc02d")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#ffeb3b")}
          onClick={() => handleZoneClick("a1")}
        />
      </svg>
    </div>
  );
}
