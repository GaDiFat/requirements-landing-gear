import React from "react";
import "./LLComponent.css";

const llReqs = [
  {
    id: "LL01",
    text: "Asignar Verdadero a la bandera de retraso de respuesta si la bandera de posición incorrecta es Verdadera durante más de 1 segundo.",
    hlLink: "HL01",
  },
  {
    id: "LL02",
    text: "Asignar Falso a la bandera de retraso de respuesta si la bandera de posición incorrecta es Verdadera por más de 3 segundos.",
    hlLink: "HL01",
  },
  {
    id: "LL03",
    text: "Asignar Falso a la bandera de retraso de respuesta si la bandera de posición incorrecta es Falsa.",
    hlLink: "HL01",
  },

  {
    id: "LL04",
    text: "Calcular el error de posición como: error de posición = comando de posición - posición estimada.",
    hlLink: "HL02",
  },
  {
    id: "LL05",
    text: "Asignar Verdadero a la bandera de posición incorrecta si el valor absoluto del error de posición es mayor a un grado.",
    hlLink: "HL02",
  },
  {
    id: "LL06",
    text: "Asignar Falso a la bandera de posición incorrecta si el valor absoluto del error de posición es menor o igual a un grado.",
    hlLink: "HL02",
  },

  {
    id: "LL07",
    text: "Asignar Verdadero a la bandera de estado inválido si la posición estimada es mayor a 90 grados o menor a 0 grados.",
    hlLink: "HL03",
  },
  {
    id: "LL08",
    text: "Asignar Verdadero a la bandera de estado inválido si el estado de WoW es Falso y el estado de vuelo es Falso.",
    hlLink: "HL03",
  },

  {
    id: "LL09",
    text: "Asignar 1 al estado de tren si la bandera de estado inválido es Falsa y la posición estimada es mayor a 0 grados.",
    hlLink: "HL04",
  },
  {
    id: "LL10",
    text: "Asignar 0 al estado de tren si la bandera de estado inválido es Falsa y la posición estimada es igual a 0 grados.",
    hlLink: "HL04",
  },

  {
    id: "LL11",
    text: "Asignar Verdadero a la bandera de contador de estado inválido si la bandera de contador es Falsa y la bandera de estado inválido es Verdadera.",
    hlLink: "HL05",
  },
  {
    id: "LL12",
    text: "Incrementar en 10 el contador de estado inválido si la bandera de estado inválido y la bandera de contador son Verdaderas.",
    hlLink: "HL05",
  },
  {
    id: "LL13",
    text: "Asignar 0 al contador de estado inválido si la bandera de estado inválido es Falsa.",
    hlLink: "HL05",
  },
  {
    id: "LL14",
    text: "Asignar Falso a la bandera de contador de estado inválido si la bandera de estado inválido es Falsa.",
    hlLink: "HL05",
  },

  {
    id: "LL15",
    text: "Asignar Verdadero a la bandera de obsolescencia de datos si el contador de estado inválido es mayor a 100.",
    hlLink: "HL06",
  },
  {
    id: "LL16",
    text: "Asignar Falso a la bandera de obsolescencia de datos si el contador de estado inválido es menor o igual a 100.",
    hlLink: "HL06",
  },

  {
    id: "LL17",
    text: "Asignar Verdadero a la bandera de alarma sonora si el estado de despegue y el estado de tren han permanecido en Verdadero y 1 respectivamente durante más de 10 segundos.",
    hlLink: "HL07",
  },
  {
    id: "LL18",
    text: "Asignar Verdadero al estado de despegue si la velocidad es mayor a 90 nudos y la altitud mayor a 500 pies.",
    hlLink: "HL07",
  },
  {
    id: "LL19",
    text: "Incrementar en 10 el contador para alarma sonora si el estado de despegue es Verdadero, el estado de tren es 1 y el contador < 10000.",
    hlLink: "HL07",
  },
  {
    id: "LL20",
    text: "Incrementar en 10 el contador de alarma sonora si el estado de despegue es Verdadero, el estado de tren es 1, el contador para alarma sonora es 10000 y el contador de alarma sonora < 30000.",
    hlLink: "HL07",
  },
  {
    id: "LL21",
    text: "Asignar Verdadero a la bandera de alarma sonora si el contador de alarma sonora es mayor a 0.",
    hlLink: "HL07",
  },

  {
    id: "LL22",
    text: "Asignar Falso a la bandera de alarma sonora si ha mantenido el valor de Verdadero durante 30000 segundos o el estado de despegue es Falso o el estado de tren es 0.",
    hlLink: "HL08",
  },
  {
    id: "LL23",
    text: "Asignar 0 al contador para alarma sonora si el estado de despegue es Falso o el estado de tren ≠ 1 o el contador de alarma sonora = 30000.",
    hlLink: "HL08",
  },
  {
    id: "LL24",
    text: "Asignar 0 al contador de alarma sonora si el estado de despegue es Falso o el estado de tren ≠ 1.",
    hlLink: "HL08",
  },

  {
    id: "LL25",
    text: "Incorporar un interruptor físico de tipo toggle para habilitar el modo de prueba en tierra.",
    hlLink: "HL09",
  },

  {
    id: "LL26",
    text: "LED rojo de estado inválido: 300 lúmenes, 694 nm.",
    hlLink: "HL10",
  },
  {
    id: "LL27",
    text: "LED verde de estado válido: 300 lúmenes, 495 nm.",
    hlLink: "HL10",
  },
  { id: "LL28", text: "LED rojo de inconsistencia de peso.", hlLink: "HL10" },
  {
    id: "LL29",
    text: "LED verde 'Diodo WOW' si inconsistencia WOW = Falsa.",
    hlLink: "HL10",
  },
  {
    id: "LL30",
    text: "LED rojo 'Diodo WOW' si inconsistencia WOW = Verdadera.",
    hlLink: "HL10",
  },
  {
    id: "LL31",
    text: "LED verde 'Salud de Datos' si obsolescencia = Falsa.",
    hlLink: "HL10",
  },
  {
    id: "LL32",
    text: "LED rojo 'Salud de Datos' si obsolescencia = Verdadera.",
    hlLink: "HL10",
  },
  {
    id: "LL33",
    text: "LED verde 'Posición' si todas las banderas son Falsas.",
    hlLink: "HL10",
  },
  {
    id: "LL34",
    text: "LED rojo 'Posición' si alguna bandera es Verdadera.",
    hlLink: "HL10",
  },
];

function LLComponent({ highlightLL, onHLFocus }) {
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
          <div className="linked-section">
            <strong>↖ HL Vinculado:</strong>{" "}
            <button onClick={() => onHLFocus(hlLink)}>Ver {hlLink}</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LLComponent;
