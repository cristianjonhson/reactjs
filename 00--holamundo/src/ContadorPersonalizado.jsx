export default function ContadorPersonalizado({ onIncrementar }) {
  return (
    <button className="boton" onClick={onIncrementar}>
      Incrementar contador
    </button>
  );
}
