import React, { useState } from "react";
import { Link } from "react-router-dom";

function IA900() {
  const preguntas = [
    {
      id: 1,
      pregunta: 'Pregunta 1',
      opciones: ["respuesta 1", "respuesta 2", "respuesta 3", "respuesta 4"],
      respuesta: "respuesta 1",
      explicacion: "explicación de respuesta 1"
    },
    {
      id: 2,
      pregunta: 'Pregunta 2',
      opciones: ["respuesta 1", "respuesta 2", "respuesta 3", "respuesta 4"],
      respuesta: "respuesta 2",
      explicacion: "explicación de respuesta 2"
    },
    {
      id: 3,
      pregunta: 'Pregunta 3',
      opciones: ["respuesta 1", "respuesta 2", "respuesta 3", "respuesta 4"],
      respuesta: "respuesta 3",
      explicacion: "explicación de respuesta 3"
    },
  ];

  const [estadoExamen, setEstadoExamen] = useState("inicio");
  const [indicePregunta, setIndicePregunta] = useState(0);
  const [respuestasCorrectas, setRespuestasCorrectas] = useState(0);
  const [respuestasUsuario, setRespuestasUsuario] = useState([]);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const iniciarExamen = () => {
    setEstadoExamen("enCurso");
  };

  const confirmarRespuesta = (opcionSeleccionada) => {
    const preguntaActual = preguntas[indicePregunta];

    const esRespuestaCorrecta = opcionSeleccionada === preguntaActual.respuesta;

    if (esRespuestaCorrecta) {
      setRespuestasCorrectas(respuestasCorrectas + 1);
    }

    setRespuestasUsuario([...respuestasUsuario, { pregunta: preguntaActual, seleccionada: opcionSeleccionada, esCorrecta: esRespuestaCorrecta }]);

    if (indicePregunta < preguntas.length - 1) {
      setIndicePregunta(indicePregunta + 1);
      setOpcionSeleccionada(null); // Limpiar la opción seleccionada para la siguiente pregunta
    } else {
      setEstadoExamen("finalizado");
    }
  };

  const reiniciarExamen = () => {
    setEstadoExamen("inicio");
    setIndicePregunta(0);
    setRespuestasCorrectas(0);
    setRespuestasUsuario([]);
    setOpcionSeleccionada(null);
  };

  const renderContenido = () => {
    switch (estadoExamen) {
      case "inicio":
        return (
          <div>
            <h1 className="text-primary">Examen AI-900</h1>
            <p className="text-secondary">Descripción del examen. Aquí puedes agregar información sobre las reglas, el tiempo, etc.</p>
            <button onClick={iniciarExamen} className="btn btn-primary m-2">
              Comenzar examen
            </button>
          </div>
        );
      case "enCurso":
        const preguntaActual = preguntas[indicePregunta];
        return (
          <div>
            <h3>{preguntaActual.pregunta}</h3>
            {preguntaActual.opciones.map((opcion, index) => (
              <div key={index} className="form-check" style={{ width: '200px', margin: '0 auto'}}>
                <input
                  type="radio"
                  name="respuesta"
                  id={`opcion${index}`}
                  value={opcion}
                  className="form-check-input"
                  checked={opcionSeleccionada === opcion}
                  onChange={() => setOpcionSeleccionada(opcion)}
                />
                <label
                  style={{width: '100%'}}
                  htmlFor={`opcion${index}`}
                  className="form-check-label"
                >
                  {opcion}
                </label>
              </div>
            ))}
            <button
              className="btn btn-primary m-2"
              onClick={() => confirmarRespuesta(opcionSeleccionada)}
              disabled={opcionSeleccionada === null}
            >
              Confirmar Respuesta
            </button>
          </div>
        );
case "finalizado":
  return (
    <div className="text-center" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
      <h1 className="text-primary">Examen finalizado</h1>
      <h5 className="text-success my-5">Preguntas correctas: {respuestasCorrectas} de {preguntas.length}</h5>

      <div className="d-flex flex-column mb-5" style={{ width: '250px', margin: '0 auto' }}>
        <Link to="/ExamenesMicrosoft" className="btn btn-primary m-2">
          Ir al inicio
        </Link>
        <button onClick={reiniciarExamen} className="btn btn-primary m-2">
          Reiniciar Examen
        </button>
        <button  className="btn btn-primary m-2">
          Revisar preguntas
        </button>
      </div>

      {/* <div className="mt-4">
        <h3 className="text-primary">Revision de preguntas:</h3>

        {respuestasUsuario.map((respuesta, index) => (
          <div key={index} className="mb-3">
            <p>Pregunta {index + 1}: {respuesta.pregunta.pregunta}</p>
            {respuesta.pregunta.opciones.map((opcion, opcionIndex) => (
              <div key={opcionIndex} className="form-check" style={{ width: '200px', margin: '0 auto' }}>
                <label
                  htmlFor={`opcion${opcionIndex}`}
                  style={{ width: '100%' }}
                  className={`form-check-label px-3 
                  ${
                    opcion === respuesta.pregunta.respuesta
                      ? 'bg-success text-white'
                      : opcion === respuesta.seleccionada
                        ? 'bg-danger text-white'
                        : ''
                  }`}
                >
                  {opcion}
                </label>
              </div>
            ))}
            <p>Explicación: {respuesta.pregunta.explicacion}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
                
      default:
        return null;
    }
  };

  return (
    <div className="text-center">
      {renderContenido()}
    </div>
  );
}

export default IA900;
