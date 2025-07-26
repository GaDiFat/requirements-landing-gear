import React from "react";
import "./LLComponent.css";

// Mapeo LL → HW para trazabilidad
const llHWMap = {
  LL05: ["HW06"],
  LL07: ["HW05"],
  LL09: ["HW01", "HW02"],
  LL10: ["HW03"],
  LL11: ["HW04"],
};

const llReqs = [
  {
    id: "LL01",
    text: "El sistema debe establecer el estado de retraso de respuesta en verdadero si el error de posición es mayor a un grado por más de 1 segundo.",
    hlLink: "HL01",
  },
  {
    id: "LL02",
    text: "El sistema debe desactivar el estado de retraso de respuesta si la posición estimada es diferente de la posición comandada por más de 3 segundos.",
    hlLink: "HL01",
  },
  {
    id: "LL03",
    text: "El sistema debe calcular el error de posición como: Error de posición = comando de posición - posición estimada.",
    hlLink: "HL02",
  },
  {
    id: "LL04",
    text: "Si el error de posición es menor o igual a un grado, el sistema debe desactivar las alertas de posición incorrecta y retraso de posición.",
    hlLink: "HL02",
  },
  {
    id: "LL05",
    text: "La función de verificación de estado debe retornar una alerta de estado inválido si el parámetro de estado del tren no se corresponde con alguno de los estados válidos.",
    hlLink: "HL03",
  },
  {
    id: "LL06",
    text: "El sistema debe registrar una alerta de insconsistencia de peso si no se detecta peso en el tren y el avión no está en vuelo.",
    hlLink: "HL03",
  },
  {
    id: "LL07",
    text: "El sistema debe retornar un código de alerta de obsolescencia de datos si la variable de estado del tren ha permanecido más de 100 milisegundos sin actualización válida.",
    hlLink: "HL04",
  },
  {
    id: "LL08",
    text: "El sistema debe monitorear si el tren de aterrizaje permanece extendido durante la fase de ascenso cuando la altitud exceda los 500 pies y una velocidad de 90 nudos.",
    hlLink: "HL05",
  },
  {
    id: "LL09",
    text: "El sistema deberá generar una alarma sonora intermitente de 30 segundos de duración si el tren de aterrizaje cumple con las condiciones de despegue y permanece extendido 10 segundos.",
    hlLink: "HL05",
  },
  {
    id: "LL10",
    text: "El sistema debe determinar que se cumplen las condiciones operacionales si la velocidad estimada es menor a 180 nudos y la altitud estimada menor a 10,000 pies antes de ejecutar el comando de extensión del tren de aterrizaje.",
    hlLink: "HL06",
  },
  {
    id: "LL11",
    text: "Si las condiciones operativas no se cumplen, el sistema debe bloquear el comando de extensión y registrar un evento de seguridad de incumplimiento de condiciones operativas.",
    hlLink: "HL06",
  },
];

function LLComponent({ highlightLL, onHLFocus, onHWFocus }) {
  return (
    <div className="ll-list">
      <h2>Requerimientos Low Level</h2>
      {llReqs.map(({ id, text, hlLink }) => (
        <div
          key={id}
          className={`ll-item ${highlightLL === id ? "highlight" : ""}`}
        >
          <h5>{id}</h5>
          <p>{text}</p>

          {/* Botón para HL asociado */}
          <div className="linked-section">
            <strong>↖ HL Vinculado:</strong>{" "}
            <button onClick={() => onHLFocus(hlLink)}>Ver {hlLink}</button>
          </div>

          {/* Botones para HW vinculados */}
          {llHWMap[id] && (
            <div className="linked-section">
              <strong>↘ HW Relacionado:</strong>{" "}
              {llHWMap[id].map((hwId) => (
                <button key={hwId} onClick={() => onHWFocus(hwId)}>
                  Ver {hwId}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default LLComponent;
