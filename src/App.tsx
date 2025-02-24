import { useEffect, useState } from "react";
import { Zone } from "./types/Zone";
import { universityData } from "./data/universityData";
import Header from "./components/Header";
import Main from "./components/Main";
import { SideBar } from "./components/SideBar";

function App() {
  const [zoneId, setZoneId] = useState<string>("guayacan");
  const [data, setData] = useState<Zone | null>(null);

  /**
   * set the zoneId
   * @param zoneId the id of the zone
   */
  const handleZoneSelection = (zoneId: string) => {
    setZoneId(zoneId);
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
          <Main />
        </div>
        <div className="flex-1">
          <SideBar data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
