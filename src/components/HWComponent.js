import React from "react";
import "./HWComponent.css";

const hardwareRequirements = [
  {
    id: "HW01",
    text: "El sistema debe emitir una alerta sonora de 80 dB.",
    linkedLL: "LL09",
  },
  {
    id: "HW02",
    text: "El sistema debe incluir una salida de audio conectada al sistema de altavoces de cabina.",
    linkedLL: "LL09",
  },
  {
    id: "HW03",
    text: "El sistema debe contar con un interruptor de encendido y apagado, ubicado en el panel superior.",
    linkedLL: "LL10",
  },
  {
    id: "HW04",
    text: "El sistema debe contar con un interruptor para testing en tierra.",
    linkedLL: "LL11",
  },
  {
    id: "HW05",
    text: "El sistema debe ser compatible con el protocolo de comunicación CAN.",
    linkedLL: "LL07",
  },
  {
    id: "HW06",
    text: "El sistema debe emitir alertas a través de diodos emisores de luz en el panel.",
    linkedLL: "LL05",
  },
];

function HWComponent({ highlightHW, onLLFocus }) {
  return (
    <div className="hw-list">
      <h2>Requerimientos Hardware</h2>
      {hardwareRequirements.map(({ id, text, linkedLL }) => (
        <div
          key={id}
          className={`hw-item ${highlightHW === id ? "highlight" : ""}`}
        >
          <h5>{id}</h5>
          <p>{text}</p>
          <div className="linked-section">
            <strong>↖ LL Vinculado:</strong>
            <button onClick={() => onLLFocus(linkedLL)}>Ver {linkedLL}</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HWComponent;
