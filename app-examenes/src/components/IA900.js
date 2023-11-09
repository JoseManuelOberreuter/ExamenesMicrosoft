import React, { useState, useEffect } from "react";

function IA900() {
  const preguntas = [
    {
      id: 1,
      pregunta: 'Pregunta 1',
      opciones: ["respuesta 1", "respuesta 2", "respuesta 3", "respuesta 4"],
      respuesta: "respuesta 1",
      explicacion: "explicación de respuesta"
    },
    {
      id: 2,
      pregunta: 'Pregunta 2',
      opciones: ["respuesta 1", "respuesta 2", "respuesta 3", "respuesta 4"],
      respuesta: "respuesta 2",
      explicacion: "explicación de respuesta"
    },
    {
      id: 3,
      pregunta: 'Pregunta 3',
      opciones: ["respuesta 1", "respuesta 2", "respuesta 3", "respuesta 4"],
      respuesta: "respuesta 3",
      explicacion: "explicación de respuesta"
    }
    // Agrega más preguntas aquí si es necesario
  ];

  const [preguntaAleatoria, setPreguntaAleatoria] = useState(null);
  const [instruccionesVisible, setInstruccionesVisible] = useState(true);
  const [contadorActivo, setContadorActivo] = useState(false);
  const [tiempoVisible, setTiempoVisible] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(3000);
  const [respuestaVisible, setRespuestaVisible] = useState(false);
  const [respuestaMostrada, setRespuestaMostrada] = useState(false);
  const [mostrarSiguientePregunta, setMostrarSiguientePregunta] = useState(false);
  const [preguntasRespondidas, setPreguntasRespondidas] = useState(0);
  const [finalVisible, setFinalVisible] = useState(false);

  const numeroRespuestasParaFinal = 10; // Número deseado de respuestas confirmadas para mostrar la parte final

  useEffect(() => {
    let interval;

    if (contadorActivo) {
      interval = setInterval(() => {
        if (tiempoRestante > 0) {
          setTiempoRestante(tiempoRestante - 1);
        } else {
          clearInterval(interval);
          // Maneja lo que sucede cuando se agota el tiempo
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [contadorActivo, tiempoRestante]);

  const mostrarPreguntaAleatoria = () => {
    const preguntaAleatoriaIndex = Math.floor(Math.random() * preguntas.length);
    const preguntaSeleccionada = preguntas[preguntaAleatoriaIndex];
    setPreguntaAleatoria(preguntaSeleccionada);
    setInstruccionesVisible(false);
    setTiempoVisible(true);
    setContadorActivo(true);
    setRespuestaMostrada(false);
    setMostrarSiguientePregunta(false);
  };

  const mostrarRespuesta = () => {
    setRespuestaVisible(true);
    setRespuestaMostrada(true);
    setMostrarSiguientePregunta(true);
    setPreguntasRespondidas(preguntasRespondidas + 1); // Incrementa el contador de respuestas confirmadas
  };

  const avanzarAPreguntaAleatoria = () => {
    const preguntaAleatoriaIndex = Math.floor(Math.random() * preguntas.length);
    const preguntaSeleccionada = preguntas[preguntaAleatoriaIndex];
    setPreguntaAleatoria(preguntaSeleccionada);
    setRespuestaVisible(false);
    setRespuestaMostrada(false);
    setMostrarSiguientePregunta(false);
  };

  useEffect(() => {
    // Verifica si se deben mostrar las partes finales
    if (preguntasRespondidas >= numeroRespuestasParaFinal) {
      setFinalVisible(true);
    }
  }, [preguntasRespondidas, numeroRespuestasParaFinal]);

  return (
    <div className="text-center">
      {instruccionesVisible && (
        <div id="instrucciones">
          <h1 className="text-primary">Examen AI-900: Microsoft Azure AI Fundamentals</h1>
          <h2 className="text-secondary small">Instrucciones</h2>
          <button className="btn btn-primary m-2" onClick={mostrarPreguntaAleatoria}>
            Comenzar examen
          </button>
        </div>
      )}

      {preguntaAleatoria && !finalVisible && (
        <div>
          <h3>{preguntaAleatoria.pregunta}</h3>
          {preguntaAleatoria.opciones.map((opcion, index) => (
            <div key={index}>
              <input
                type="radio"
                name="respuesta"
                id={`opcion${index}`}
                value={opcion}
                disabled={respuestaMostrada}
              />
              <label htmlFor={`opcion${index}`}>{opcion}</label>
            </div>
          ))}
          <button className="btn btn-primary m-2" onClick={respuestaVisible ? avanzarAPreguntaAleatoria : mostrarRespuesta}>
            {respuestaVisible ? 'Siguiente pregunta' : 'Confirmar Respuesta'}
          </button>
        </div>
      )}

      {respuestaVisible && !finalVisible && (
        <div>
          Respuesta: {preguntaAleatoria.respuesta}
          <br />
          Explicación: {preguntaAleatoria.explicacion}
        </div>
      )}

      {tiempoVisible && (
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            background: "rgba(0, 0, 0, 0.7)",
            color: "white",
            padding: "5px",
          }}
        >
          Tiempo restante: {Math.floor(tiempoRestante / 60)}:{tiempoRestante % 60}
        </div>
      )}

      {finalVisible && (
        <div>
          <h1>Examen finalizado</h1>
          <p>RESPUESTAS CONFIRMADAS: {preguntasRespondidas} DE {numeroRespuestasParaFinal}</p>
          <a href="/">Ir al inicio</a>
        </div>
      )}
    </div>
  );
}

export default IA900;
