export default function ContadorPersonalizado({ onIncrementar }) {
  return (
    <button className="boton" onClick={onIncrementar}>
      ¡Haz clic para incrementar!
    </button>
  );
}
