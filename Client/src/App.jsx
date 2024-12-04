// src/App.jsx
import React from 'react';
import './css/App.css';
import { Canvas } from '@react-three/fiber';
import Globo from './components/Globo';
import Luzes from './components/Luzes';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [0, 0, 3] }}>
        {/* Luzes */}
        <Luzes />
        {/* Globo com material colorido */}
        <Globo />
        {/* Controles de órbita para rotação */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;