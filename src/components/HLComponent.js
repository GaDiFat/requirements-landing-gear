import React from "react";
import "./HLComponent.css";

const hlReqs = [
  {
    id: "HL01",
    text: "Identificar retrasos de respuesta basados en desviaciones de posición.",
    llLinks: ["LL01", "LL02"],
  },
  {
    id: "HL02",
    text: "Validar y calcular errores de posición para alertas de precisión.",
    llLinks: ["LL03", "LL04"],
  },
  {
    id: "HL03",
    text: "Evaluar el estado del tren y generar alertas según condiciones.",
    llLinks: ["LL05", "LL06"],
  },
  {
    id: "HL04",
    text: "Monitorear la obsolescencia de datos del tren de aterrizaje.",
    llLinks: ["LL07"],
  },
  {
    id: "HL05",
    text: "Detectar condiciones anómalas del tren durante el despegue.",
    llLinks: ["LL08", "LL09"],
  },
  {
    id: "HL06",
    text: "Validar condiciones operacionales antes de ejecutar comandos del tren.",
    llLinks: ["LL10", "LL11", "LL12"],
  },
];

function HLComponent({ highlightHL, onLLFocus }) {
  return (
    <div className="hl-list">
      <h2>Requerimientos High Level</h2>
      {hlReqs.map(({ id, text, llLinks }) => (
        <div
          key={id}
          className={`hl-item ${highlightHL === id ? "highlight" : ""}`}
        >
          <h5>{id}</h5>
          <p>{text}</p>
          <div className="linked-buttons">
            {llLinks.map((llId) => (
              <button key={llId} onClick={() => onLLFocus(llId)}>
                Ir a {llId}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HLComponent;
