// Ejemplo Renderizado Condicional
export default function Condicional({ esVisible }) {
  return esVisible ? <p>Esto se muestra si esVisible es true</p> : null;
}
