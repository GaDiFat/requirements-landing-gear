import React, { useState } from "react";
import HLComponent from "./components/HLComponent";
import LLComponent from "./components/LLComponent";
import HWComponent from "./components/HWComponent";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("HL");
  const [highlightHL, setHighlightHL] = useState(null);
  const [highlightLL, setHighlightLL] = useState(null);
  const [highlightHW, setHighlightHW] = useState(null);

  const handleHLFocus = (hlId) => {
    setActiveTab("HL");
    setHighlightHL(hlId);
  };

  const handleLLFocus = (llId) => {
    setActiveTab("LL");
    setHighlightLL(llId);
  };

  const handleHWFocus = (hwId) => {
    setActiveTab("HW");
    setHighlightHW(hwId);
  };

  return (
    <div className="app-container">
      <h1>Sistema de Alerta de Tren de Aterrizaje</h1>
      <nav className="tab-nav">
        <button onClick={() => setActiveTab("HL")}>HL Requirements</button>
        <button onClick={() => setActiveTab("LL")}>LL Requirements</button>
        <button onClick={() => setActiveTab("HW")}>HW Requirements</button>
      </nav>

      <div className="tab-content">
        {activeTab === "HL" && (
          <HLComponent highlightHL={highlightHL} onLLFocus={handleLLFocus} />
        )}
        {activeTab === "LL" && (
          <LLComponent
            highlightLL={highlightLL}
            onHLFocus={handleHLFocus}
            onHWFocus={handleHWFocus}
          />
        )}
        {activeTab === "HW" && (
          <HWComponent highlightHW={highlightHW} onLLFocus={handleLLFocus} />
        )}
      </div>
    </div>
  );
}

export default App;
