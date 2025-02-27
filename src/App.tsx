import { useEffect, useState } from "react";
import { Zone } from "./types/Zone";
import { universityData } from "./data/universityData";
import Header from "./components/Header";
import Main from "./components/Main";
import { SideBar } from "./components/SideBar";

function App() {
  const [zoneId, setZoneId] = useState<string>("guayacan");
  const [data, setData] = useState<Zone | null>(null);
  const [buildingId, setBuildingId] = useState<string>("a1");

  /**
   * set the zoneId
   * @param zoneId the id of the zone
   */
  const handleZoneSelection = (zoneId: string) => {
    setZoneId(zoneId);
  };

  /**
   * set the buildingId, if the building corresponds to a different zone, update the zone
   * @param buildingId the id of the building
   */
  const handleBuildSelection = (buildingId: string) => {
    setBuildingId(buildingId);
    const selectedZone = universityData.find((zone) =>
      zone.buildings.some((building) => building.id === buildingId),
    );
    if (selectedZone && selectedZone.id !== zoneId) {
      setZoneId(selectedZone.id);
    }
  };

  /**
   * set the zone data whenever zoneId changes
   */
  useEffect(() => {
    const selectedZone =
      universityData.find((zone) => zone.id === zoneId) || null;
    setData(selectedZone);
  }, [zoneId]);

  return (
    <>
      <Header handleZoneSelection={handleZoneSelection} zoneId={zoneId} />
      <div className="flex flex-col items-center justify-center md:flex-row mt-20 gap-4 min-h-[calc(100vh-6rem)] p-2">
        <div className="flex-1">
          <Main
            handleBuildSelection={handleBuildSelection}
            buildingId={buildingId}
          />
        </div>
        <div className="flex-1">
          <SideBar
            data={data}
            handleBuildSelection={handleBuildSelection}
            buildingId={buildingId}
          />
        </div>
      </div>
    </>
  );
}

export default App;
