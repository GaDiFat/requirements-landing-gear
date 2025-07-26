import React, { useState } from "react";
import HLComponent from "./components/HLComponent";
import LLComponent from "./components/LLComponent";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("HL");
  const [highlightedHL, setHighlightedHL] = useState(null);
  const [highlightedLL, setHighlightedLL] = useState(null);

  const handleHLFocus = (hlId) => {
    setHighlightedLL(null);
    setActiveTab("HL");
    setHighlightedHL(hlId);
  };

  const handleLLFocus = (llId) => {
    setHighlightedHL(null);
    setActiveTab("LL");
    setHighlightedLL(llId);
  };

  return (
    <div className="App">
      <nav className="tab-nav">
        <button onClick={() => setActiveTab("HL")}>🔷 High Level</button>
        <button onClick={() => setActiveTab("LL")}>🔶 Low Level</button>
      </nav>
      {activeTab === "HL" && (
        <HLComponent highlightHL={highlightedHL} onLLFocus={handleLLFocus} />
      )}
      {activeTab === "LL" && (
        <LLComponent highlightLL={highlightedLL} onHLFocus={handleHLFocus} />
      )}
    </div>
  );
}

export default App;
