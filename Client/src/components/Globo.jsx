import React, { useRef } from 'react';
import { Sphere } from '@react-three/drei';
import { Line } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';

function Globo() {
  const globeRef = useRef();

  // Rotação contínua do globo
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001; // Girar o globo ao longo do eixo Y
    }
  });

  return (
    <>
      {/* Globo */}
      <Sphere ref={globeRef} args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#4E74C2" // Cor de fundo azul do globo
          wireframe={true} // Efeito de malha de linhas no globo
        />
      </Sphere>

      {/* Linha de Longitude (dividindo em hemisfério Leste/Oeste) */}
      <Line
        points={[
          [0, -1, 0], // Ponto inicial (sul)
          [0, 1, 0], // Ponto final (norte)
        ]}
        color="cyan"
        lineWidth={1}
        visible={false} // Linha oculta para o usuário
      />

      {/* Linha de Latitude (dividindo em hemisfério Norte/Sul) */}
      <Line
        points={[
          [-1, 0, 0], // Ponto inicial (oeste)
          [1, 0, 0], // Ponto final (leste)
        ]}
        color="cyan"
        lineWidth={1}
        visible={false} // Linha oculta para o usuário
      />

      {/* Linha de Longitude (dividindo o globo no eixo Y em 180°) */}
      {Array.from({ length: 36 }).map((_, i) => {
        const angle = MathUtils.degToRad((i * 10) - 180); // Definir ângulos de cada linha de longitude
        return (
          <Line
            key={i}
            points={[
              [Math.cos(angle), 0, Math.sin(angle)], // Ponto inicial na superfície
              [Math.cos(angle), 1, Math.sin(angle)], // Ponto final no raio da esfera (limite)
            ]}
            color="cyan"
            lineWidth={1}
            visible={false} // Linha oculta para o usuário
          />
        );
      })}

      {/* Linha de Latitude */}
      {Array.from({ length: 18 }).map((_, i) => {
        const angle = MathUtils.degToRad((i * 10) - 90); // Definir ângulos de cada linha de latitude
        return (
          <Line
            key={i}
            points={[
              [Math.cos(angle), Math.sin(angle), 0], // Ponto inicial na superfície
              [Math.cos(angle), Math.sin(angle), 1], // Ponto final no raio da esfera (limite)
            ]}
            color="cyan"
            lineWidth={1}
            visible={false} // Linha oculta para o usuário
          />
        );
      })}
    </>
  );
}

export default Globo;
