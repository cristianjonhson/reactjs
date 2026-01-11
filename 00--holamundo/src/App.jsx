import './App.css';
import Mensaje from './components/mensaje';
import Saludo from './components/saludo';
import EstadoUsuario from './components/estado-usuario';
import ContadorPersonalizado from './components/contador-personalizado';
import AlertaPersonalizada from './components/alerta-personalizada';
import PerfilX from './components/perfil-x';

export default function App() {
  return (
    <div className="app-container">
      <div className="perfil-lista">
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
