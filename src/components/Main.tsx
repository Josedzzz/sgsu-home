export default function Main() {
  const handleZoneClick = (zoneName: string) => {
    alert(`Hiciste clic en: ${zoneName}`);
  };

  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        style={{ width: "100%", height: "auto" }}
      >
        {/* Cancha (Polígono irregular) */}
        <polygon
          points="10,50 30,30 70,30 90,50 70,70 30,70"
          fill="brown"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "saddlebrown")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "brown")}
          onClick={() => handleZoneClick("Cancha")}
        />
        <text x="50" y="50" fill="white" fontSize="5" textAnchor="middle">
          Cancha
        </text>

        {/* Edificio A (Rectángulo) */}
        <rect
          x="0"
          y="0"
          width="15"
          height="20"
          fill="blue"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "darkblue")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "blue")}
          onClick={() => handleZoneClick("Edificio A")}
        />
        <text x="17.5" y="20" fill="white" fontSize="4" textAnchor="middle">
          E1
        </text>

        {/* Edificio B (Rectángulo) */}
        <rect
          x="40"
          y="10"
          width="15"
          height="20"
          fill="red"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "darkred")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "red")}
          onClick={() => handleZoneClick("Edificio B")}
        />
        <text x="47.5" y="20" fill="white" fontSize="4" textAnchor="middle">
          E2
        </text>

        {/* Zona Verde (Círculo) */}
        <circle
          cx="75"
          cy="50"
          r="10"
          fill="green"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "darkgreen")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "green")}
          onClick={() => handleZoneClick("Zona Verde")}
        />
        <text x="75" y="50" fill="white" fontSize="4" textAnchor="middle">
          ZV
        </text>

        {/* Texto descriptivo del mapa */}
        <text x="50" y="95" fontSize="5" fill="black" textAnchor="middle">
          Mapa de la Universidad
        </text>
      </svg>
    </div>
  );
}
