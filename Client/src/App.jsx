import React, { useState } from 'react';
import './css/App.css';
import { Canvas } from '@react-three/fiber';
import Globo from './components/Globo';
import Luzes from './components/Luzes';
import { OrbitControls } from '@react-three/drei';

function App() {
  const [isDay, setIsDay] = useState(true);

  return (
    <div className="App">
      <button
        onClick={() => setIsDay(!isDay)}
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          padding: '10px',
          backgroundColor: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Alternar para {isDay ? 'Noite' : 'Dia'}
      </button>
      <Canvas camera={{ position: [0, 0, 3] }}>
        <Luzes />
        <Globo isDay={isDay} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
