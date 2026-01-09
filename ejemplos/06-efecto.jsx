// Ejemplo useEffect
import { useEffect } from 'react';
export default function Efecto() {
  useEffect(() => {
    alert('Componente montado');
  }, []);
  return <div>Componente con efecto</div>;
}
