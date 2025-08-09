import React, { useState } from "react";
import "./HLComponent.css";

const hlReqs = [
  {
    id: "HL01",
    text: "El sistema debe determinar el valor de la bandera de retraso de respuesta.",
    llLinks: [
      {
        id: "LL01",
        text: "Asignar Verdadero si la bandera de posición incorrecta es Verdadera > 1s.",
      },
      {
        id: "LL02",
        text: "Asignar Falso si la bandera de posición incorrecta es Verdadera > 3s.",
      },
      {
        id: "LL03",
        text: "Asignar Falso si la bandera de posición incorrecta es Falsa.",
      },
    ],
  },
  {
    id: "HL02",
    text: "El sistema debe determinar el valor de la bandera de posición incorrecta.",
    llLinks: [
      { id: "LL04", text: "Calcular error de posición = comando - estimada." },
      { id: "LL05", text: "Asignar Verdadero si |error| > 1°." },
      { id: "LL06", text: "Asignar Falso si |error| ≤ 1°." },
    ],
  },
  {
    id: "HL03",
    text: "El sistema debe determinar el valor de la bandera de estado inválido.",
    llLinks: [
      {
        id: "LL07",
        text: "Asignar Verdadero si posición estimada > 90° o < 0°.",
      },
      { id: "LL08", text: "Asignar Verdadero si WoW = Falso y vuelo = Falso." },
    ],
  },
  {
    id: "HL04",
    text: "El sistema debe evaluar el estado del tren.",
    llLinks: [
      {
        id: "LL09",
        text: "Asignar 1 al estado de tren si estado inválido = Falso y posición > 0°.",
      },
      {
        id: "LL10",
        text: "Asignar 0 al estado de tren si estado inválido = Falso y posición = 0°.",
      },
    ],
  },
  {
    id: "HL05",
    text: "El sistema debe calcular el contador de estado inválido como tiempo durante el cual se ha mantenido en Verdadero la bandera de estado inválido.",
    llLinks: [
      {
        id: "LL11",
        text: "Activar bandera de contador si estado inválido = Verdadero y bandera = Falsa.",
      },
      {
        id: "LL12",
        text: "Incrementar contador en 10 si ambas banderas = Verdadero.",
      },
      { id: "LL13", text: "Asignar 0 si estado inválido = Falso." },
      { id: "LL14", text: "Desactivar bandera si estado inválido = Falso." },
    ],
  },
  {
    id: "HL06",
    text: "El sistema debe determinar el valor de la bandera de obsolescencia de datos.",
    llLinks: [
      { id: "LL15", text: "Asignar Verdadero si contador > 100." },
      { id: "LL16", text: "Asignar Falso si contador ≤ 100." },
    ],
  },
  {
    id: "HL07",
    text: "El sistema debe asignar el valor de Verdadero a la bandera de alarma sonora durante una duración máxima de 30 segundos si el estado de despegue y el estado de tren están y han permanecido con valor de Verdadero y 1 respectivamente durante más de 10 segundos.",
    llLinks: [
      {
        id: "LL17",
        text: "Asignar Verdadero si estado de despegue y tren = Verdadero y 1 por > 10s.",
      },
      {
        id: "LL18",
        text: "Asignar estado de despegue = Verdadero si velocidad > 90 nudos y altitud > 500 pies.",
      },
      {
        id: "LL19",
        text: "Incrementar contador en 10 si condiciones se cumplen y contador < 10000.",
      },
      {
        id: "LL20",
        text: "Incrementar contador en 10 si contador = 10000 y < 30000.",
      },
      { id: "LL21", text: "Asignar Verdadero si contador > 0." },
    ],
  },
  {
    id: "HL08",
    text: "El sistema debe asignar el valor de Falso a la bandera de alarma sonora si la bandera de alarma sonora mantuvo el valor de Verdadero durante 30000 segundos o el estado de despegue es Falso o el estado de tren es 0.",
    llLinks: [
      {
        id: "LL22",
        text: "Asignar Falso si duración = 30000s o despegue = Falso o tren = 0.",
      },
      {
        id: "LL23",
        text: "Asignar 0 al contador si despegue = Falso o tren ≠ 1 o contador = 30000.",
      },
      {
        id: "LL24",
        text: "Asignar 0 al contador si despegue = Falso o tren ≠ 1.",
      },
    ],
  },
  {
    id: "HL09",
    text: "El sistema debe contar con un interruptor físico dedicado para habilitar el modo de prueba (testing) en condiciones de operación en tierra.",
    llLinks: [
      { id: "LL25", text: "Incorporar un interruptor físico de tipo toggle." },
    ],
  },
  {
    id: "HL10",
    text: "El sistema debe mostrar alertas visuales a la tripulación a través de diodos emisores de luz (LEDs), activando el LED correspondiente de acuerdo con el tipo de alerta.",
    llLinks: [
      { id: "LL26", text: "LED rojo estado inválido: 300 lúmenes, 694 nm." },
      { id: "LL27", text: "LED verde estado válido: 300 lúmenes, 495 nm." },
      { id: "LL28", text: "LED rojo inconsistencia de peso." },
      {
        id: "LL29",
        text: "LED verde 'Diodo WOW' si inconsistencia WOW = Falsa.",
      },
      {
        id: "LL30",
        text: "LED rojo 'Diodo WOW' si inconsistencia WOW = Verdadera.",
      },
      {
        id: "LL31",
        text: "LED verde 'Salud de Datos' si obsolescencia = Falsa.",
      },
      {
        id: "LL32",
        text: "LED rojo 'Salud de Datos' si obsolescencia = Verdadera.",
      },
      {
        id: "LL33",
        text: "LED verde 'Posición' si todas las banderas = Falsa.",
      },
      {
        id: "LL34",
        text: "LED rojo 'Posición' si alguna bandera = Verdadera.",
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
