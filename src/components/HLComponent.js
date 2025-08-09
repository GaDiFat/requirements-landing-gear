import React, { useState } from "react";
import "./HLComponent.css";

const hlReqs = [
  {
    id: "HL01",
    text: "El sistema debe determinar el valor de la bandera de retraso de respuesta.",
    llLinks: [
      {
        id: "LL01",
        text: "El sistema debe asignar el valor de Verdadero a la bandera de retraso de respuesta si la bandera de posición incorrecta es Verdadera durante más de 1 segundo.",
      },
      {
        id: "LL02",
        text: "El sistema debe asignar el valor de Falso a la bandera de retraso de respuesta si la bandera de posición incorrecta es Verdadera por más de 3 segundos.",
      },
      {
        id: "LL03",
        text: "El sistema debe asignar el valor de Falso a la bandera de retraso de respuesta si la bandera de posición incorrecta es Falsa.",
      },
    ],
  },
  {
    id: "HL02",
    text: "El sistema debe determinar el valor de la bandera de posición incorrecta.",
    llLinks: [
      {
        id: "LL04",
        text: "El sistema debe calcular el error de posición como error de posición=comando de posición-posición estimada",
      },
      {
        id: "LL05",
        text: "El sistema debe asignar el valor de Verdadero a la bandera de posición incorrecta si el valor absoluto del error de posición es mayor a un grado.",
      },
      {
        id: "LL06",
        text: "El sistema debe asignar el valor de Falso a la bandera de posición incorrecta si el valor absoluto del error de posición es menor o iguial a un grado.",
      },
    ],
  },
  {
    id: "HL03",
    text: "El sistema debe determinar el valor de la bandera de estado invalido",
    llLinks: [
      {
        id: "LL07",
        text: "El sistema debe asignar el valor de Verdadero a la bandera de estado invalido si la posición estimada es mayor a 90 grados o menor a 0 grados.",
      },
      {
        id: "LL08",
        text: "El sistema debe asignar el valor de Verdadero a la bandera de estado invalido si el estado de WoW es Falso y el estado de vuelo es Falso",
      },
      {
        id: "LL09",
        text: "El sistema debe asignr el valor de Verdadero a la bandera de inconsistencia de peso si el estado de WoW es Falso y el estado de vuelo es Falso.",
      },
    ],
  },
  {
    id: "HL04",
    text: "El sistema debe evaluar el estado del tren.",
    llLinks: [
      {
        id: "LL10",
        text: "El sistema debe asignar el valor de 1 al estado de tren si la bandera de estado invalido es Falsa y la posición estimada es mayor a 0 grados.",
      },
      {
        id: "LL11",
        text: "El sistema debe asignar el valor de 0 al estado de tren si la bandera de estado invalido es Falsa y la posición estimada es igual a 0 grados.",
      },
    ],
  },
  {
    id: "HL05",
    text: "El sistema calcular el contador de estado invalido como tiempo durante el cual se ha mantenido en Verdadero la bandera de estado invalido.",
    llLinks: [
      {
        id: "LL12",
        text: "El sistema debe asignar el valor de Verdadero a la bandera de contador de estado invalido si la bandera de contador de estado invalido es Falsa y la bandera de estado invalido es Verdadera.",
      },
      {
        id: "LL13",
        text: "El sistema debe incrementar en un valor de 10 el contador de estado invalido si la bandera de estado invalido es Verdadera y la bandera de contador de estado invalido es Verdadera.",
      },
      {
        id: "LL14",
        text: "El sistema debe asignar el valor de 0 al contador de estado invalido si la bandera de estado invalido es Falsa.",
      },
      {
        id: "LL15",
        text: "El sustema debe asignar el valor de Falso a la bandera de contador de estado invalido si la bandera de estado invalido es Falsa.",
      },
    ],
  },
  {
    id: "HL06",
    text: "El sistema debe determinar el valor de la bandera de obsolesencia de datos.",
    llLinks: [
      {
        id: "LL16",
        text: "El sistema debe asignar el valor de Verdadero a la bandera de obsolesencia de datos si el contador de estado invalido es mayor a 100.",
      },
      {
        id: "LL17",
        text: "El sistema debe asignar el valor de Falso a la bandera de obsolesencia de datos si el contador de estado invalido es menor o igual a 100.",
      },
    ],
  },
  {
    id: "HL07",
    text: "El sistema debe asignar el valor de Verdadero a la bandera de alarma sonora durante una duración máxima de 30 segundos si el estado de despegue y el estado de tren están y han permanecido con valor de Verdadero y 1 respectivamente durante más de 10 segundos.",
    llLinks: [
      {
        id: "LL18",
        text: "El sistema debe asignar el valor de Verdadero al estado de despegue si la velocidad es mayor a 90 nudos y la altitudo mayor a 500 pies.",
      },
      {
        id: "LL19",
        text: "El sistema debe incrementar en un valor de 10 el contador para alarma sonora si el estado de despegue es Verdadero, el estado de tren es 1 y el valor del contador para alarma sonora es menor a 10000.",
      },
      {
        id: "LL20",
        text: "El sistema debe incrementar en un valor de 10 el contador de alarma sonora si el estado de despegue es Verdadero, el estado de tren es 1, el valor del contador par alarma sonora es 10000 y el valor del contador de alarma sonora es menor a 30000.",
      },
      {
        id: "LL21",
        text: "El sistema debe asignar el valor de Verdadero a la bandera de alarma sonora si el contador de alarma sonora es mayor a 0.",
      },
    ],
  },
  {
    id: "HL08",
    text: "El sistema debe asignar el valor de Falso a la bandera de alarma sonora si la bandera de alarma sonora mantuvo el valor de Verdadero durante 30000 segundos o el estado de despegue es Falso o el estado de tren es 0.",
    llLinks: [
      {
        id: "LL22",
        text: "El sistema debe asignar el valor de 0 al contador para alarma sonora si el estado de despegue es Falso o el estado de tren no es 1 o el contador de alarma sonora es igual a 30000.",
      },
      {
        id: "LL23",
        text: "El sistema debe asignar el valor de 0 al contador de alarma sonora si el estado de despegue es Falso o el estado de tren no es 1.",
      },
    ],
  },
  {
    id: "HL09",
    text: "El sistema debe contar con un interruptor físico dedicado para habilitar el modo de prueba (testing) en condiciones de operación en tierra.",
    llLinks: [
      {
        id: "LL24",
        text: "El sistema debe incorporar un interruptor físico de tipo toggle.",
      },
    ],
  },
  {
    id: "HL10",
    text: "El sistema debe mostrar alertas visuales a la tripulación a través de diodos emisores de luz (LEDs), activando el LED correspondiente de acuerdo con el tipo de alerta.",
    llLinks: [
      {
        id: "LL25",
        text: "El diodo de estado inválido debe tener una intensidad de 300 lúmenes y longitud de onda de 694 nm(Color rojo).",
      },
      {
        id: "LL26",
        text: "El diodo de estado valido debe tener una intensidad de 300 lúmenes y longitud de onda de 495 nm (Color verde).",
      },
      {
        id: "LL27",
        text: "El sistema debe contar con un diodo de inconsistencia de peso que se activara en Rojo cuando se tenga inconsistencia de peso.",
      },
      {
        id: "LL28",
        text: "El sistema debe encender un LED verde identificado como “Diodo WOW” cuando la bandera de inconsistencia del estado Weight-On-Wheels (WOW) sea falsa.",
      },
      {
        id: "LL29",
        text: "El sistema debe encender un LED rojo identificado como “Diodo WOW” cuando la bandera de inconsistencia del estado Weight-On-Wheels (WOW) sea verdadera.",
      },
      {
        id: "LL30",
        text: "El sistema debe encender un LED verde identificado como “Diodo de Salud de Datos” cuando la bandera de obsolescencia de datos sea falsa.",
      },
      {
        id: "LL31",
        text: "El sistema debe encender un LED rojo identificado como “Diodo de Salud de Datos” cuando la bandera de obsolescencia de datos sea verdadera.",
      },
      {
        id: "LL32",
        text: "El sistema debe encender un LED verde identificado como “Diodo de Posición” cuando las siguientes tres condiciones se cumplan simultáneamente: La bandera de posición incorrecta sea falsa.",
      },
    ],
  },
];

function HLComponent() {
  const [expandedHL, setExpandedHL] = useState(null);

  const toggleExpand = (hlId) => {
    setExpandedHL((prev) => (prev === hlId ? null : hlId));
  };

  return (
    <div className="hl-list">
      <h2>Requerimientos High Level</h2>
      {hlReqs.map(({ id, text, llLinks }) => (
        <div
          key={id}
          className={`hl-item ${expandedHL === id ? "expanded" : ""}`}
        >
          <div className="hl-header" onClick={() => toggleExpand(id)}>
            <h5>{id}</h5>
            <p>{text}</p>
          </div>

          {expandedHL === id && (
            <div className="ll-sublist">
              <h4>Requerimientos Low Level vinculados:</h4>
              {llLinks.map(({ id: llId, text: llText }) => (
                <div key={llId} className="ll-item">
                  <strong>{llId}</strong>: {llText}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default HLComponent;
