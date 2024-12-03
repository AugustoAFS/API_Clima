import React from 'react';

function Luzes() {
  return (
    <>
      {/* Luz suave */}
      <ambientLight intensity={0.3} />
      
      {/* Luz direcional com sombras */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow // Habilita sombras
        shadow-mapSize-width={1024} // Resolução da sombra
        shadow-mapSize-height={1024}
        shadow-camera-far={50} // Distância da câmera para gerar sombras
        shadow-camera-near={0.1}
        shadow-camera-left={-10} // Área de sombras
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </>
  );
}

export default Luzes;
