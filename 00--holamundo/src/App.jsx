
import { useState } from 'react';
import EstadoUsuario from './EstadoUsuario';


import './App.css';
import Mensaje from './Mensaje';
import Boton from './Boton';
import Saludo from './Saludo';
import ContadorPersonalizado from './ContadorPersonalizado';

  const [cuenta, setCuenta] = useState(0);
  return (
    <div className="app-container">
      <h1>¡Hola Mundo desde React + Vite!</h1>
      <Mensaje />
      <Saludo nombre="Cristian" />
      <Saludo nombre="React" />
      <Saludo nombre="Mundo" />
      <EstadoUsuario nombre="Cristian" activo={true} />
      <EstadoUsuario nombre="Invitado" activo={false} />
      <p className="mensaje">Contador: {cuenta}</p>
      <ContadorPersonalizado onIncrementar={() => setCuenta(cuenta + 1)} />
      <Boton />
    </div>
  );
}
