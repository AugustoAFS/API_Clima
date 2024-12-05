import React, { useState } from 'react';
import './css/App.css';
import { Canvas } from '@react-three/fiber';
import Globo from './globo/Globo';
import Luzes from './globo/Luzes';
import Card from './components/Card'
import { OrbitControls } from '@react-three/drei';

function App() {
  const [isDay, setIsDay] = useState(true);

  return (
    <div className="App">

      <h1 className='Titulo'>API CLIMA</h1>

      <button onClick={() => setIsDay(!isDay)} className='Button_day_nigth'> Alternar para {isDay ? 'Noite' : 'Dia'} </button>

      <Card />
      <Canvas camera={{ position: [0, 0, 3] }}>
        <Luzes isDay={isDay} />
        <Globo isDay={isDay} />
        <OrbitControls />
      </Canvas>


    </div>
  );
}

export default App;