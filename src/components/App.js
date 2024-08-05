import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";

function App() {
    const [selectedHog, setSelectedHog] = useState(null);
    const [showGreased, setShowGreased] = useState(false);

    const handleHogClick = (hog) => {
        setSelectedHog(hog);
    };

    const filteredHogs = showGreased ? hogs.filter(hog => hog.greased) : hogs;

    return (
        <div className="App">
            <Nav />
            <div>
                <label>
                    Show Greased Only
                    <input
                        type="checkbox"
                        checked={showGreased}
                        onChange={() => setShowGreased(!showGreased)}
                    />
                </label>
            </div>
            <div className="ui grid container">
                {filteredHogs.map((hog) => (
                    <div key={hog.name} className="ui eight wide column" onClick={() => handleHogClick(hog)}>
                        <h3>{hog.name}</h3>
                        <img src={hog.image} alt={hog.name} />
                        {selectedHog === hog && (
                            <div className="hog-details">
                                <p>Specialty: {hog.specialty}</p>
                                <p>Weight: {hog.weight}</p>
                                <p>Greased: {hog.greased ? "Yes" : "No"}</p>
                                <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;