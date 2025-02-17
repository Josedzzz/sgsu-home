import { Building } from "../types/Building";
import { Zone } from "../types/Zone";

// the props of the component
interface SideBarProps {
  handleToggleModal: () => void;
  data: Zone | null;
}

export function SideBar({ handleToggleModal, data }: SideBarProps) {
  return (
    <div className="fixed inset-0 flex flex-col z-50">
      {/* Opacity background */}
      <div
        onClick={handleToggleModal}
        className="absolute inset-0 bg-black opacity-50"
      ></div>

      {/* SideBar container */}
      <div className="relative z-10 flex flex-col gap-4 p-6 overflow-y-auto h-full w-4/5 max-w-[400px] ml-auto bg-emerald-800 text-white shadow-lg">
        <button
          onClick={handleToggleModal}
          className="self-end text-white hover:text-gray-300"
        >
          <i className="fa-solid fa-xmark text-2xl"></i>
        </button>

        {data ? (
          <>
            <h2 className="text-2xl font-bold border-b pb-2 border-emerald-400">
              {data.name}
            </h2>

            <div className="flex flex-col gap-4">
              {data.buildings.map((building: Building) => (
                <div
                  key={building.id}
                  className="bg-emerald-700 p-4 rounded-lg shadow"
                >
                  <h3 className="text-lg font-semibold">{building.name}</h3>
                  <p className="text-sm text-gray-300">{building.type}</p>
                  <p className="text-sm mt-1">{building.description}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-center text-gray-300">
            Selecciona una zona para ver su información
          </p>
        )}
      </div>
    </div>
  );
}
