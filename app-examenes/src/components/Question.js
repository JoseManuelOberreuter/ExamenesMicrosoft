// src/components/Question.js
import React, { useState } from "react";

function Question({ question, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = () => {
    if (selectedOption !== null) {
      onAnswer(selectedOption === question.correctOption);
      setSelectedOption(null);
    }
  };

  return (
    <div>
      <h2>{question.text}</h2>
      {question.options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            name="answer"
            value={index}
            checked={selectedOption === index}
            onChange={() => setSelectedOption(index)}
          />
          {option}
          <br />
        </label>
      ))}
      <button onClick={handleAnswer}>Confirmar respuesta</button>
    </div>
  );
}

export default Question;
