// Ejemplo Context API
import { createContext, useContext } from 'react';
const MiContexto = createContext('valor por defecto');
export function Proveedor({ children }) {
  return <MiContexto.Provider value="Hola desde el contexto">{children}</MiContexto.Provider>;
}
export function Consumidor() {
  const valor = useContext(MiContexto);
  return <div>{valor}</div>;
}
