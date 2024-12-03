import { OrbitControls } from '@react-three/drei';

function ControleCamera() {
  return (
    <OrbitControls
      enableZoom={true} // Permite zoom
      maxPolarAngle={Math.PI / 2} // Restringe a rotação superior
      minPolarAngle={0} // Restringe a rotação inferior
      enablePan={false} // Impede arrastar lateralmente
    />
  );
}

export default ControleCamera;
