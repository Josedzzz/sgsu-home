import { useState } from "react";
import { Zone } from "./types/Zone";
import Main from "./components/Main";
import { SideBar } from "./components/SideBar";
import { universityData } from "./data/universityData";

function App() {
  const [data, setData] = useState<Zone | null>(null);
  const [showModal, setShowModal] = useState(false);

  /**
   * handle the showModal value
   */
  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  /**
   * Update data based on the selected zone ID
   */
  const handleZoneSelection = (zoneId: string) => {
    const selectedZone =
      universityData.find((zone) => zone.id === zoneId) || null;
    setData(selectedZone);
  };

  return (
    <>
      <Main handleZoneSelection={handleZoneSelection} />

      {/* Button to open the sidebar */}
      <button
        onClick={handleToggleModal}
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Open Sidebar
      </button>

      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}
    </>
  );
}

export default App;
