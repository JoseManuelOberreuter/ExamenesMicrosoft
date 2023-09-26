// src/components/ExamSelection.js
import React from "react";

function ExamSelection({ onSelectExam }) {
  const exams = [
    {
      name: "Examen 1",
      questions: [
        {
          text: "¿Cuál es la capital de Francia?",
          options: ["Madrid", "Berlín", "Londres", "París"],
          correctOption: 3,
        },
        {
          text: "¿Cuál es el río más largo del mundo?",
          options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
          correctOption: 1,
        },
      ],
    },
    {
      name: "Examen 2",
      questions: [
        {
          text: "¿Cuál es el planeta más grande del sistema solar?",
          options: ["Tierra", "Júpiter", "Marte", "Venus"],
          correctOption: 1,
        },
        {
          text: "¿En qué año se fundó Google?",
          options: ["1995", "2001", "1998", "2005"],
          correctOption: 2,
        },
      ],
    },
    // Agrega más exámenes aquí
  ];

  return (
    <div>
      <h1>Selecciona un examen</h1>
      {exams.map((exam, index) => (
        <div key={index}>
          <h2>{exam.name}</h2>
          <button onClick={() => onSelectExam(exam)}>Comenzar Examen</button>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}

export default ExamSelection;
