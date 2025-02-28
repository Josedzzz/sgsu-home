import { useState } from "react";
import { universityData } from "../data/universityData";

interface HeaderProps {
  handleZoneSelection: (zoneId: string) => void;
  zoneId: string;
}

export default function Header({ handleZoneSelection, zoneId }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectedZone =
    universityData.find((zone) => zone.id === zoneId)?.name || "";

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-emerald-500 shadow-lg rounded-2xl p-2 z-50 animate-[slide-in-right_0.5s_ease-in]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white">
          Universidad del Quindío
        </h2>

        <div
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="relative flex items-center gap-3 cursor-pointer hover:scale-110 transition-transform"
        >
          <span className="text-white font-semibold text-sm sm:text-md md:text-lg">
            {selectedZone}
          </span>
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <i className="fa-solid fa-bars text-white text-2xl cursor-pointer hover:scale-110 transition-transform"></i>
          </button>
        </div>
      </div>

      {isDropdownOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[90%] bg-emerald-500 rounded-xl shadow-md overflow-hidden animate-[slide-in-bottom_0.3s_ease-in]">
          {universityData.map((zone) => (
            <button
              key={zone.id}
              onClick={() => {
                handleZoneSelection(zone.id);
                setIsDropdownOpen(false);
              }}
              className={`block w-full px-4 py-2 text-left text-white hover:bg-emerald-700 transition ${
                zone.id === zoneId ? "bg-emerald-700" : ""
              }`}
            >
              {zone.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
