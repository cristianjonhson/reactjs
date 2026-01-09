// Ejemplo Lista y Keys
export default function Lista() {
  const elementos = ['A', 'B', 'C'];
  return (
    <ul>
      {elementos.map((item, idx) => <li key={idx}>{item}</li>)}
    </ul>
  );
}
