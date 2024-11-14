import { useState } from "react";
import { getRandomMode } from "./musicUtils";
import "./App.css";

function App() {
  const [mode, setMode] = useState<{
    modeName: string;
    scale: string[];
  } | null>(null);

  const [showNotes, setShowNotes] = useState(false);

  const handleGenerateMode = () => {
    const newMode = getRandomMode();
    setMode(newMode);
  };

  const handleCheckboxChange = () => {
    setShowNotes((prevShowNotes) => !prevShowNotes);
  };

  return (
    <div className="App">
      <h1>Random Mode Generator</h1>
      <button onClick={handleGenerateMode}>Generate Random Mode</button>

      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={showNotes}
          onChange={handleCheckboxChange}
        />
        Show Scale Notes
      </label>

      {mode && (
        <div className="mode-display">
          <h2>
            {mode.scale[0]} {mode.modeName} Mode
          </h2>
          {showNotes ? <p>{mode.scale.join(" ")}</p> : <p></p>}
        </div>
      )}
    </div>
  );
}

export default App;
