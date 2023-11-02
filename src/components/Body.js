import React, { useState } from 'react';
import './Body.css';

const models = ['Model S', 'Model 3', 'Model X', 'Model Y'];
const modelColors = ['#808080', '#0000FF', '#000', '#A52A2A'];

const Body = () => {
    const [currentModelIndex, setCurrentModelIndex] = useState(0);

    const handleNextModel = () => {
        const nextIndex = (currentModelIndex + 1) % models.length;
        setCurrentModelIndex(nextIndex);
    };

    return (
        <div className="body-container" style={{ backgroundColor: modelColors[currentModelIndex] }}>
            {models.map((model, index) => (
                <section
                    key={model}
                    className="banner"
                    style={{
                        display: currentModelIndex === index ? 'block' : 'none',
                    }}
                >
                    <div className="banner__content">
                        <h1>{model}</h1>
                    </div>
                </section>
            ))}

            <button onClick={handleNextModel}>↓</button>
        </div>
    );
}

export default Body;
