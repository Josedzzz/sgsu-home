// the props of the component
interface MainProps {
  handleBuildSelection: (buildingId: string) => void;
  buildingId: string;
}

export default function Main({ handleBuildSelection, buildingId }: MainProps) {
  const handleZoneClick = (zoneName: string) => {
    alert(`Hiciste clic en: ${zoneName}`);
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "700px",
        margin: "0 auto",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#fff",
        borderRadius: "18px",
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
          fill={buildingId === "f6" ? "#8e44ad" : "#9b59b6"}
          className={buildingId === "f6" ? "animate-pulse" : ""}
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#8e44ad")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.fill =
              buildingId === "f6" ? "#8e44ad" : "#9b59b6")
          }
          onClick={() => handleBuildSelection("f6")}
        />

        {/* polygon f5 */}
        <polygon
          points="9, 46 12, 46 12, 43 9, 43"
          fill={buildingId === "f5" ? "#8e44ad" : "#9b59b6"}
          className={buildingId === "f5" ? "animate-pulse" : ""}
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#8e44ad")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.fill =
              buildingId === "f5" ? "#8e44ad" : "#9b59b6")
          }
          onClick={() => handleBuildSelection("f5")}
        />

        {/* polygon f4 */}
        <polygon
          points="9, 42 15, 42 15, 38 20, 38 20, 34 14, 34 14, 36 9, 36"
          fill={buildingId === "f4" ? "#8e44ad" : "#9b59b6"}
          className={buildingId === "f4" ? "animate-pulse" : ""}
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#8e44ad")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.fill =
              buildingId === "f4" ? "#8e44ad" : "#9b59b6")
          }
          onClick={() => handleBuildSelection("f4")}
        />

        {/* polygon f2 */}
        <polygon
          points="21, 31 26, 36 30, 32 25, 27"
          fill={buildingId === "f2" ? "#8e44ad" : "#9b59b6"}
          className={buildingId === "f2" ? "animate-pulse" : ""}
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#8e44ad")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.fill =
              buildingId === "f2" ? "#8e44ad" : "#9b59b6")
          }
          onClick={() => handleBuildSelection("f2")}
        />

        {/* polygon f2 */}
        <polygon
          points="32, 32 32, 34 34, 34 36, 36 39, 30 36, 28 33, 32"
          fill={buildingId === "f2" ? "#8e44ad" : "#9b59b6"}
          className={buildingId === "f2" ? "animate-pulse" : ""}
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#8e44ad")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.fill =
              buildingId === "f2" ? "#8e44ad" : "#9b59b6")
          }
          onClick={() => handleBuildSelection("f2")}
        />

        {/* polygon f1 */}
        <polygon
          points="28, 26 30, 28 32, 26 32, 30 36, 26 40, 26 40, 16 32, 16 32, 20"
          fill={buildingId === "f1" ? "#8e44ad" : "#9b59b6"}
          className={buildingId === "f1" ? "animate-pulse" : ""}
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#8e44ad")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.fill =
              buildingId === "f1" ? "#8e44ad" : "#9b59b6")
          }
          onClick={() => handleBuildSelection("f1")}
        />

        {/* Guamos zone */}

        {/* polygon d2 */}
        <polygon
          points="84, 4 82, 9 90, 10 92, 5"
          fill={buildingId === "d2" ? "#64b5f6" : "#1976d2"}
          className={buildingId === "d2" ? "animate-pulse" : ""}
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#1976d2")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.fill =
              buildingId === "d2" ? "#64b5f6" : "#1976d2")
          }
          onClick={() => handleBuildSelection("d2")}
        />

        {/* polygon d3 */}
        <polygon
          points="50, 0 53, 2 50, 4 47, 2"
          fill={buildingId === "d3" ? "#64b5f6" : "#1976d2"}
          className={buildingId === "d3" ? "animate-pulse" : ""}
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#1976d2")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.fill =
              buildingId === "d3" ? "#64b5f6" : "#1976d2")
          }
          onClick={() => handleBuildSelection("d3")}
        />

        {/* polygon d4 */}
        <polygon
          points="46, 14 50, 20 58, 14 54, 8"
          fill={buildingId === "d4" ? "#64b5f6" : "#1976d2"}
          className={buildingId === "d4" ? "animate-pulse" : ""}
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#1976d2")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.fill =
              buildingId === "d4" ? "#64b5f6" : "#1976d2")
          }
          onClick={() => handleBuildSelection("d4")}
        />

        {/* Platanillas zone */}

        {/* polygon e1 */}
        <polygon
          points="75, 9 76, 12 80, 11 79, 8"
          fill={buildingId === "e1" ? "#ef5350" : "#d32f2f"}
          className={buildingId === "e1" ? "animate-pulse" : ""}
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#d32f2f")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.fill =
              buildingId === "e1" ? "#ef5350" : "#d32f2f")
          }
          onClick={() => handleBuildSelection("e1")}
        />

        {/* polygon e2 */}
        <polygon
          points="70, 11 71, 14 75, 13 74, 10"
          fill={buildingId === "e2" ? "#ef5350" : "#d32f2f"}
          className={buildingId === "e2" ? "animate-pulse" : ""}
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#d32f2f")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.fill =
              buildingId === "e2" ? "#ef5350" : "#d32f2f")
          }
          onClick={() => handleBuildSelection("e2")}
        />

        {/* polygon e4 */}
        <polygon
          points="58, 5 62, 11 74, 9 72, 3"
          fill={buildingId === "e4" ? "#ef5350" : "#d32f2f"}
          className={buildingId === "e4" ? "animate-pulse" : ""}
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#d32f2f")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.fill =
              buildingId === "e4" ? "#ef5350" : "#d32f2f")
          }
          onClick={() => handleBuildSelection("e4")}
        />

        {/* polygon e5 */}
        <polygon
          points="62, 12 63, 15 70, 14 69, 11"
          fill={buildingId === "e5" ? "#ef5350" : "#d32f2f"}
          className={buildingId === "e5" ? "animate-pulse" : ""}
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#d32f2f")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.fill =
              buildingId === "e5" ? "#ef5350" : "#d32f2f")
          }
          onClick={() => handleBuildSelection("e5")}
        />

        {/* Cambulos zone */}

        {/* polygon c10 */}
        <polygon
          points="98, 9 94, 18 89, 17 94, 7"
          fill={buildingId === "c10" ? "#ffa726" : "#f57c00"}
          className={buildingId === "c10" ? "animate-pulse" : ""}
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#f57c00")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.fill =
              buildingId === "c10" ? "#ffa726" : "#f57c00")
          }
          onClick={() => handleBuildSelection("c10")}
        />

        {/* circle c9 */}
        <circle
          cx="80"
          cy="18"
          r="3"
          fill={buildingId === "c9" ? "#ffa726" : "#f57c00"}
          className={buildingId === "c9" ? "animate-pulse" : ""}
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#f57c00")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.fill =
              buildingId === "c9" ? "#ffa726" : "#f57c00")
          }
          onClick={() => handleBuildSelection("c9")}
        />

        {/* polygon c7 */}
        <polygon
          points="55, 28 70, 49 85, 44 70, 23"
          fill={buildingId === "c7" ? "#ffa726" : "#f57c00"}
          className={buildingId === "c7" ? "animate-pulse" : ""}
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#f57c00")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.fill =
              buildingId === "c7" ? "#ffa726" : "#f57c00")
          }
          onClick={() => handleBuildSelection("c7")}
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

        {/* Guaduales zone */}

        {/* polygon b1 */}
        <polygon
          points="55, 85 53, 92 73, 95 75, 88"
          fill="#4caf50"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#388e3c")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#4caf50")}
          onClick={() => handleZoneClick("b1")}
        />

        {/* ellipse b2 */}
        <ellipse
          cx="55"
          cy="96"
          rx="4"
          ry="2"
          fill="#4caf50"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#388e3c")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#4caf50")}
          onClick={() => handleZoneClick("b2")}
        />

        {/* polygon b3 */}
        <polygon
          points="40, 90 44, 92 46, 90 44, 88"
          fill="#4caf50"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#388e3c")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#4caf50")}
          onClick={() => handleZoneClick("b3")}
        />

        {/* polygon b4 */}
        <polygon
          points="30, 95 32, 97 38, 90 35, 88"
          fill="#4caf50"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#388e3c")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#4caf50")}
          onClick={() => handleZoneClick("b4")}
        />

        {/* polygon b5 */}
        <polygon
          points="50, 76 48, 82 61, 84 63, 78"
          fill="#4caf50"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#388e3c")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#4caf50")}
          onClick={() => handleZoneClick("b5")}
        />

        {/* polygon b6 */}
        <polygon
          points="35, 72 34, 78 46, 80 47, 74"
          fill="#4caf50"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#388e3c")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#4caf50")}
          onClick={() => handleZoneClick("b6")}
        />

        {/* rect b7 */}
        <rect
          x="28"
          y="76"
          width="5"
          height="3"
          fill="#4caf50"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#388e3c")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#4caf50")}
          onClick={() => handleZoneClick("b7")}
        />

        {/* rect b8 */}
        <rect
          x="24"
          y="75"
          width="3"
          height="2"
          fill="#4caf50"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#388e3c")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#4caf50")}
          onClick={() => handleZoneClick("b8")}
        />

        {/* rect b9 */}
        <rect
          x="18"
          y="77"
          width="4"
          height="2"
          fill="#4caf50"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#388e3c")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#4caf50")}
          onClick={() => handleZoneClick("b8")}
        />

        {/* polygon b11 and b12 */}
        <polygon
          points="8, 91 9, 92 12, 92 12, 89"
          fill="#4caf50"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#388e3c")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#4caf50")}
          onClick={() => handleZoneClick("b6")}
        />

        {/* polygon b13 */}
        <polygon
          points="2, 93 3, 95 6, 94 6, 91"
          fill="#4caf50"
          onMouseEnter={(e) => (e.currentTarget.style.fill = "#388e3c")}
          onMouseLeave={(e) => (e.currentTarget.style.fill = "#4caf50")}
          onClick={() => handleZoneClick("b6")}
        />

        {/* Streets */}
        <polyline
          points="5, 30 22, 14 44, 12 58, 3 78, 1 98, 4"
          fill="none"
          stroke="#aaa"
          strokeWidth="0.5"
        />

        <polyline
          points="14, 90 23, 82 38, 81 80, 88 95, 94"
          fill="none"
          stroke="#aaa"
          strokeWidth="0.5"
        />

        <polyline
          points="62, 85 65, 76 67, 74 93, 73"
          fill="none"
          stroke="#aaa"
          strokeWidth="0.5"
        />

        {/* Small streets */}
        <polyline
          points="44, 12 44, 16 70, 55 75, 58 79, 65 79, 73"
          fill="none"
          stroke="#ccc"
          strokeWidth="0.4"
        />

        <polyline
          points="80, 88 81, 82 81, 74"
          fill="none"
          stroke="#ccc"
          strokeWidth="0.4"
        />

        <polyline
          points="54, 84 53, 88 44, 87 40, 89"
          fill="none"
          stroke="#ccc"
          strokeWidth="0.4"
        />

        <polyline
          points="8, 27 8, 45 9, 45"
          fill="none"
          stroke="#ccc"
          strokeWidth="0.4"
        />

        <polyline
          points="16, 20 23, 29"
          fill="none"
          stroke="#ccc"
          strokeWidth="0.4"
        />

        <polyline
          points="30, 14 30, 22"
          fill="none"
          stroke="#ccc"
          strokeWidth="0.4"
        />

        <polyline
          points="35, 13 35, 16"
          fill="none"
          stroke="#ccc"
          strokeWidth="0.4"
        />

        {/* Trees top left */}
        <circle cx="10" cy="10" r="2" fill="#73D4AF" />
        <circle cx="12" cy="11" r="2" fill="#3ABB8A" />
        <circle cx="14" cy="10" r="2" fill="#73D4AF" />
        <circle cx="16" cy="12" r="2" fill="#3ABB8A" />
        <circle cx="17" cy="9" r="2" fill="#73D4AF" />
        <circle cx="15" cy="7" r="2" fill="#3ABB8A" />
        <circle cx="20" cy="8" r="2" fill="#73D4AF" />
        <circle cx="19" cy="5" r="2" fill="#3ABB8A" />
        <circle cx="17" cy="6" r="2" fill="#73D4AF" />
        <circle cx="22" cy="7" r="2" fill="#3ABB8A" />
        <circle cx="22" cy="4" r="2" fill="#73D4AF" />
        <circle cx="24" cy="4" r="2" fill="#3ABB8A" />

        {/* Trees mid left */}
        <circle cx="10" cy="60" r="3" fill="#73D4AF" />
        <circle cx="13" cy="57" r="3" fill="#3ABB8A" />
        <circle cx="16" cy="61" r="3" fill="#73D4AF" />
        <circle cx="19" cy="59" r="3" fill="#3ABB8A" />
        <circle cx="17" cy="55" r="3" fill="#73D4AF" />
        <circle cx="21" cy="53" r="3" fill="#3ABB8A" />
        <circle cx="22" cy="58" r="3" fill="#73D4AF" />
        <circle cx="25" cy="60" r="3" fill="#3ABB8A" />
        <circle cx="28" cy="58" r="3" fill="#73D4AF" />
        <circle cx="25" cy="56" r="3" fill="#3ABB8A" />
        <circle cx="26" cy="51" r="3" fill="#73D4AF" />
        <circle cx="30" cy="49" r="3" fill="#3ABB8A" />
        <circle cx="33" cy="47" r="3" fill="#73D4AF" />
        <circle cx="30" cy="54" r="3" fill="#3ABB8A" />
        <circle cx="34" cy="52" r="3" fill="#73D4AF" />
        <circle cx="37" cy="48" r="3" fill="#3ABB8A" />
        <circle cx="42" cy="47" r="3" fill="#73D4AF" />
        <circle cx="46" cy="44" r="3" fill="#3ABB8A" />
        <circle cx="47" cy="40" r="3" fill="#73D4AF" />
        <circle cx="45" cy="36" r="3" fill="#3ABB8A" />
        <circle cx="46" cy="32" r="3" fill="#73D4AF" />
        <circle cx="43" cy="52" r="3" fill="#3ABB8A" />
        <circle cx="47" cy="49" r="3" fill="#73D4AF" />
        <circle cx="49" cy="52" r="3" fill="#3ABB8A" />
        <circle cx="51" cy="56" r="3" fill="#73D4AF" />
        <circle cx="53" cy="60" r="3" fill="#3ABB8A" />
        <circle cx="58" cy="61" r="3" fill="#73D4AF" />
        <circle cx="55" cy="54" r="3" fill="#3ABB8A" />
        <circle cx="53" cy="50" r="4" fill="#73D4AF" />
        <circle cx="51" cy="44" r="4" fill="#3ABB8A" />
        <circle cx="53" cy="40" r="4" fill="#73D4AF" />
        <circle cx="50" cy="35" r="4" fill="#3ABB8A" />
        <circle cx="57" cy="57" r="3" fill="#73D4AF" />
        <circle cx="60" cy="57" r="3" fill="#3ABB8A" />

        {/* Trees bottom left */}
        <circle cx="30" cy="85" r="2" fill="#73D4AF" />
        <circle cx="28" cy="86" r="2" fill="#3ABB8A" />
        <circle cx="29" cy="88" r="2" fill="#73D4AF" />
        <circle cx="26" cy="89" r="2" fill="#3ABB8A" />
        <circle cx="25" cy="86" r="2" fill="#73D4AF" />
        <circle cx="26" cy="89" r="2" fill="#3ABB8A" />
        <circle cx="27" cy="92" r="2" fill="#73D4AF" />
        <circle cx="29" cy="91" r="2" fill="#3ABB8A" />
        <circle cx="23" cy="89" r="2" fill="#73D4AF" />
        <circle cx="24" cy="91" r="2" fill="#3ABB8A" />
        <circle cx="22" cy="92" r="2" fill="#73D4AF" />
        <circle cx="20" cy="90" r="2" fill="#3ABB8A" />
        <circle cx="18" cy="92" r="2" fill="#73D4AF" />
      </svg>
    </div>
  );
}
