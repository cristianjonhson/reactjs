export default function EstadoUsuario({ nombre, activo }) {
  return (
    <p className="mensaje">
      Usuario: {nombre} <b>{activo ? '🟢 Activo' : '🔴 Inactivo'}</b>
    </p>
  );
}
