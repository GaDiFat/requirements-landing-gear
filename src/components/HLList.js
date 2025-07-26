const hlReqs = [
  {
    id: "HL01",
    text: "El sistema debe activar una alerta de posición retrasada si hay un estado de retraso de respuesta.",
  },
  // Añade los demás HL aquí...
];

export default function HLList() {
  return (
    <div>
      {hlReqs.map((req) => (
        <div
          key={req.id}
          id={req.id}
          style={{ padding: "1em", borderBottom: "1px solid #ccc" }}
        >
          <h5>{req.id}</h5>
          <p>{req.text}</p>
        </div>
      ))}
    </div>
  );
}
