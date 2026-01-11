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
    <div className="perfil-x">
      <img className="perfil-x__img" src={foto} alt={nombre} />
      <div className="perfil-x__info">
        <div className="perfil-x__fila-nombre">
          <span className="perfil-x__nombre">{nombre}</span>
          {verificado && <span className="perfil-x__verificado">✔️</span>}
        </div>
        <div className="perfil-x__usuario">{usuario}</div>
      </div>
      <button
        onClick={onSeguir}
        className={`perfil-x__boton${siguiendo ? " siguiendo" : ""}`}
      >
        {siguiendo ? "Siguiendo" : "Seguir"}
      </button>
    </div>
  );
};

export default PerfilX;
