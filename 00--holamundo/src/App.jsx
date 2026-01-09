

import './App.css';
import Mensaje from './Mensaje';
import Boton from './Boton';
import Saludo from './Saludo';

export default function App() {
  return (
    <div className="app-container">
      <h1>¡Hola Mundo desde React + Vite!</h1>
      <Mensaje />
      <Saludo nombre="Cristian" />
      <Saludo nombre="React" />
      <Saludo nombre="Mundo" />
      <Boton />
    </div>
  );
}
