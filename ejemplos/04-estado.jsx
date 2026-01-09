// Ejemplo Estado
import { useState } from 'react';
export default function Contador() {
  const [cuenta, setCuenta] = useState(0);
  return <button onClick={() => setCuenta(cuenta + 1)}>{cuenta}</button>;
}
