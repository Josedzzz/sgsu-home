import { Building } from "../types/Building";
import { Zone } from "../types/Zone";

// the props of the component
interface SideBarProps {
  data: Zone | null;
}

export function SideBar({ data }: SideBarProps) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white text-black shadow-lg rounded-lg h-auto max-h-[calc(100vh-6rem)] md:overflow-y-auto">
      {data ? (
        <>
          <h2 className="text-2xl font-bold border-b pb-2 border-gray-300">
            {data.name}
          </h2>

          <div className="flex flex-col gap-4">
            {data.buildings.map((building: Building) => (
              <div
                key={building.id}
                className="bg-gray-100 p-4 rounded-lg shadow"
              >
                <h3 className="text-lg font-semibold">{building.name}</h3>
                <p className="text-sm text-gray-600">{building.type}</p>
                <p className="text-sm mt-1">{building.description}</p>
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
