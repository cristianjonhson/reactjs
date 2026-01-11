export default function AlertaPersonalizada({ onAlerta }) {
  return (
    <button className="boton" onClick={onAlerta}>
      ¡Presiona para ver alerta!
    </button>
  );
}
