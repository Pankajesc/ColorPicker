import React, { useState } from 'react';
import './App.css';

const App = () => {
  const colors = [
    '#ff0000',
    '#00ff00',
    '#0000ff',
    '#ff8000',
    '#8000ff',
    '#00ffff',
    '#ffff00',
    '#ff0080',
    '#0080ff',
    '#80ff00',
    '#ff00ff',
    '#008080',
    '#808000',
    '#800080',
    '#ff80ff',
    '#80ffff',
    '#ffff80',
    '#800000',
    '#008000',
    '#000080'
  ];
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const handleButtonClick = () => {
    setShowColors(!showColors);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  return (
    <div className='App'>
      <button onClick={handleButtonClick} className='button'>Pick a color</button>
      {showColors && (
        <div>
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
                width: '30px',
                height: '30px',
                display: 'inline-block',
                margin: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && <p>You picked: {selectedColor}</p>}
    </div>
  );
};

export default App;
