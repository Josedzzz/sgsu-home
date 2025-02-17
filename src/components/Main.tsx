import { universityData } from "../data/universityData";

interface MainProps {
  handleZoneSelection: (zoneId: string) => void;
}

export default function Main({ handleZoneSelection }: MainProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Select a Zone</h1>
      <div className="flex gap-4 flex-wrap">
        {universityData.map((zone) => (
          <button
            key={zone.id}
            onClick={() => handleZoneSelection(zone.id)}
            className="px-4 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition"
          >
            {zone.name}
          </button>
        ))}
      </div>
    </div>
  );
}
