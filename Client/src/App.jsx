import React, { useState } from 'react';
import './css/App.css';
import './css/index.css';
import './css/card.css';
import { Canvas } from '@react-three/fiber';
import Globo from './globo/Globo';
import Luzes from './globo/Luzes';
import Card from './components/Card';
import ImgDay from './assets/icon/lua-crescente.png';
import ImgNigth from './assets/icon/brilho-do-sol.png';
import { OrbitControls } from '@react-three/drei';

function App() {
  const [isDay, setIsDay] = useState(true);

  const toggleImage = () => {
    setIsDay(!isDay);
  };

  return (
    <div className="App">
      <div className='content'>
        <h1 className='Titulo'>API CLIMA</h1>

        <button onClick={toggleImage} className='Button_day_nigth'> 
          Alternar para {isDay ? 'Noite' : 'Dia'}
          <img
            src={isDay ? ImgDay : ImgNigth}
            alt={isDay ? "Modo Escuro" : "Modo Claro"}
            className="Button_icon" 
          />
        </button>

      </div>

      {/* Card com informações */}
      <Card />

      {/* Canvas do Three.js com Globo */}
      <Canvas 
        camera={{    
          position: [0, 0, 3],
          fov: 75,
          near: 0.1,
          far: 100,
        }} 
      >
        <Luzes isDay={isDay} />
        <Globo isDay={isDay} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
