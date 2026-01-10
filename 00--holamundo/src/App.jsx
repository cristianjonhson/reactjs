


import './App.css';
import Mensaje from './Mensaje';
import Saludo from './Saludo';
import EstadoUsuario from './EstadoUsuario';
import ContadorPersonalizado from './ContadorPersonalizado';
import AlertaPersonalizada from './AlertaPersonalizada';
import PerfilX from './PerfilX';

export default function App() {
  return (
    <div className="app-container">
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
        <PerfilX
          foto="https://unavatar.io/cristianjonhson"
          nombre="Kate Miller"
          usuario="@KateMillerGems"
          verificado={true}
        />
      </div>
      <h1>¡Hola Mundo desde React + Vite!</h1>
      <Mensaje />
      {/* Ejemplo de props */}
      <Saludo nombre="Cristian" />
      <Saludo nombre="React" />
      {/* Ejemplo de booleanos como props */}
      <EstadoUsuario nombre="Cristian" activo={true} />
      <EstadoUsuario nombre="Invitado" activo={false} />
      {/* Ejemplo de función como prop */}
      <ContadorPersonalizado onIncrementar={() => alert('¡Has incrementado el contador (sin estado)!')} />
      <AlertaPersonalizada onAlerta={() => alert('¡Este es un alert personalizado pasado como prop!')} />
    </div>
  );
}
