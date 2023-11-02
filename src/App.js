import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Body from './components/Body';

function App() {
    const [selectedModel, setSelectedModel] = useState(null);

    const handleModelClick = (model) => {
        setSelectedModel(model);
    };

    return (
        <div className="App">
            <NavBar onModelClick={handleModelClick} />
            <Body selectedModel={selectedModel} />
        </div>
    );
}

export default App;
