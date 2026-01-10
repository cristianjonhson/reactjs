import React from "react";

const PerfilX = ({
  foto,
  nombre,
  usuario,
  verificado = false,
  onSeguir = () => {},
  siguiendo = false,
}) => {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      background: "#000",
      color: "#fff",
      borderRadius: "999px",
      padding: "8px 16px",
      width: "fit-content",
      fontFamily: 'system-ui, sans-serif',
    }}>
      <img
        src={foto}
        alt={nombre}
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          marginRight: 12,
        }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ fontWeight: 600, fontSize: 16 }}>{nombre}</span>
          {verificado && (
            <span style={{ color: "#1da1f2", fontSize: 16, marginLeft: 2 }}>✔️</span>
          )}
        </div>
        <div style={{ color: "#8899a6", fontSize: 14 }}>{usuario}</div>
      </div>
      <button
        onClick={onSeguir}
        style={{
          marginLeft: 16,
          background: siguiendo ? "#222" : "#fff",
          color: siguiendo ? "#fff" : "#000",
          border: "none",
          borderRadius: 999,
          padding: "6px 18px",
          fontWeight: 600,
          cursor: "pointer",
          fontSize: 15,
        }}
      >
        {siguiendo ? "Siguiendo" : "Seguir"}
      </button>
    </div>
  );
};

export default PerfilX;
