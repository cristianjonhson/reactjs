import React from "react";
import "./PerfilX.css";

const PerfilX = ({
  foto,
  nombre,
  usuario,
  verificado = false,
  onSeguir = () => {},
  siguiendo = false,
}) => {
  return (
    <div className="perfil-x" role="region" aria-label={`Perfil de ${nombre || 'usuario'}`}>
      <img
        className="perfil-x__img"
        src={foto || 'https://unavatar.io/twitter'}
        alt={`Foto de perfil de ${nombre || 'usuario'}`}
        onError={e => {
          e.target.onerror = null;
          e.target.src = 'https://unavatar.io/twitter';
        }}
        aria-hidden={foto ? 'false' : 'true'}
      />
      <div className="perfil-x__info">
        <div className="perfil-x__fila-nombre">
          <span className="perfil-x__nombre">{nombre || 'Sin nombre'}</span>
          {verificado && <span className="perfil-x__verificado">✔️</span>}
        </div>
        <div className="perfil-x__usuario">{usuario || '@usuario'}</div>
      </div>
      <button
        onClick={onSeguir}
        className={`perfil-x__boton${siguiendo ? " siguiendo" : ""}`}
        aria-pressed={siguiendo}
        aria-label={siguiendo ? `Siguiendo a ${nombre || 'usuario'}` : `Seguir a ${nombre || 'usuario'}`}
      >
        {siguiendo ? "Siguiendo" : "Seguir"}
      </button>
    </div>
  );
};

export default PerfilX;
