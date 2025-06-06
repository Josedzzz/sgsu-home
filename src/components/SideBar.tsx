import { Building } from "../types/Building";
import { Zone } from "../types/Zone";

// the props of the component
interface SideBarProps {
  data: Zone | null;
  handleBuildSelection: (buildingId: string) => void;
  buildingId: string;
}

export function SideBar({
  data,
  handleBuildSelection,
  buildingId,
}: SideBarProps) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white text-black shadow-lg rounded-lg h-auto md:max-h-[calc(100vh-6rem)] md:overflow-y-auto animate-[fade-in_0.8s_ease-in]">
      {data ? (
        <>
          <h2 className="text-2xl font-bold border-b pb-2 border-gray-300">
            {data.name}
          </h2>

          <div className="flex flex-col gap-4">
            {data.buildings.map((building: Building) => (
              <div
                key={building.id}
                className={`p-4 rounded-lg shadow hover:scale-105 transition-transform duration-300 animate-[slide-in-right_0.7s_ease-in] ${
                  building.id === buildingId
                    ? "bg-emerald-100 border-2 border-emerald-500 scale-105"
                    : "bg-gray-100"
                }`}
                onClick={() => handleBuildSelection(building.id)}
              >
                <h3 className="text-lg font-semibold">
                  {building.id}. {building.name}
                </h3>
                <p className="text-sm text-gray-600">{building.type}</p>
                <p className="text-sm mt-1">{building.description}</p>

                {/* Display Points of Interest */}
                {building.pointsOfInterest &&
                  building.pointsOfInterest.length > 0 && (
                    <div className="mt-2">
                      <h4 className="text-sm font-semibold text-gray-700">
                        Puntos de interés:
                      </h4>
                      <ul className="list-disc list-inside">
                        {building.pointsOfInterest.map((point, index) => (
                          <li key={index} className="text-sm text-gray-600">
                            {point.link ? (
                              <a
                                href={
                                  point.link.startsWith("http://") ||
                                  point.link.startsWith("https://")
                                    ? point.link
                                    : `https://${point.link}`
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-emerald-500 hover:underline"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {point.name}
                              </a>
                            ) : (
                              <span>{point.name}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-600">
          Selecciona una zona para ver su información
        </p>
      )}
    </div>
  );
}
