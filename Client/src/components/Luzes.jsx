import React from 'react';

function Luzes() {
  return (
    <>
      {/* Luz ambiente mais forte */}
      <ambientLight intensity={0.7} />
      
      {/* Luz direcional mais intensa */}
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      
      {/* Adicione uma segunda luz direcional para iluminar de outro ângulo */}
      <directionalLight position={[-5, -5, -5]} intensity={0.7} />
    </>
  );
}

export default Luzes;
