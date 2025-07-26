const llReqs = [
  {
    id: "LL01",
    text: "El sistema debe establecer el estado de retraso de respuesta en verdadero si el error de posición es mayor a 1° por más de 1 segundo.",
    hlLink: "HL01",
  },
  // Añade los demás LL aquí...
];

export default function LLList() {
  return (
    <div>
      {llReqs.map((req) => (
        <div
          key={req.id}
          style={{ padding: "1em", borderBottom: "1px solid #ccc" }}
        >
          <h5>{req.id}</h5>
          <p>
            {req.text} ➜ <a href={`#${req.hlLink}`}>{req.hlLink}</a>
          </p>
        </div>
      ))}
    </div>
  );
}
