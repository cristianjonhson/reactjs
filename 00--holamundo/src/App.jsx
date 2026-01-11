import './App.css';
import Mensaje from './components/Mensaje';
import Saludo from './components/Saludo';
import EstadoUsuario from './components/EstadoUsuario';
import ContadorPersonalizado from './components/ContadorPersonalizado';
import AlertaPersonalizada from './components/AlertaPersonalizada';
import PerfilX from './components/PerfilX';

export default function App() {
  return (
    <div className="app-container">
      <div
        style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}
      >
        <PerfilX
          foto="https://pbs.twimg.com/profile_images/1817823055202205696/Jh40yNnz_400x400.jpg"
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
      <ContadorPersonalizado
        onIncrementar={() =>
          alert('¡Has incrementado el contador (sin estado)!')
        }
      />
      <AlertaPersonalizada
        onAlerta={() =>
          alert('¡Este es un alert personalizado pasado como prop!')
        }
      />
    </div>
  );
}
