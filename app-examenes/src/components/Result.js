// src/components/Result.js
import React from "react";

function Result({ correctAnswers, totalQuestions, onRestart }) {
  const percentage = (correctAnswers / totalQuestions) * 100;

  return (
    <div>
      <h1>Resultado del examen</h1>
      <p>Preguntas acertadas: {correctAnswers} de {totalQuestions}</p>
      <p>Puntuación: {percentage.toFixed(2)}%</p>
      <button onClick={onRestart}>Volver al inicio</button>
    </div>
  );
}

export default Result;
