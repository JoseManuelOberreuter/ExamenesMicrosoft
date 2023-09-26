// src/App.js
import React, { useState } from "react";
import Login from "./components/Login";
import Inicio from "./components/Inicio";
import ExamSelection from "./components/ExamSelection";
import Question from "./components/Question";
import Result from "./components/Result";

function App() {
  const [username, setUsername] = useState(null);
  const [selectedExam, setSelectedExam] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showInicio, setShowInicio] = useState(false);

  const handleLogin = (name) => {
    setUsername(name);
    setShowInicio(true);
  };

  const handleSelectExam = (exam) => {
    setSelectedExam(exam);
    setCurrentQuestion(0);
    setCorrectAnswers(0);
    setShowInicio(false); // Oculta el componente de Inicio cuando se selecciona un examen.
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
    if (currentQuestion < selectedExam.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // El examen ha terminado, mostrar el resultado.
      setCurrentQuestion(null);
    }
  };

  const handleRestart = () => {
    setSelectedExam(null);
    setCurrentQuestion(0);
    setCorrectAnswers(0);
    setShowInicio(true); // Muestra el componente de Inicio cuando se reinicia.
  };

  const handleLogout = () => {
    setUsername(null);
    setShowInicio(false);
  };

  return (
    <div className="App">
      {!username && !showInicio && <Login onLogin={handleLogin} />}
      {username && showInicio && (
        <Inicio
          onLogout={handleLogout}
          onExamSelection={() => {
            setShowInicio(false);
            setSelectedExam(null);
          }}
          isExamSelected={selectedExam !== null}
        />
      )}
      {username && !showInicio && selectedExam === null && (
        <ExamSelection onSelectExam={handleSelectExam} />
      )}
      {username && !showInicio && selectedExam !== null && currentQuestion !== null && (
        <Question
          question={selectedExam.questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      )}
      {username && !showInicio && selectedExam !== null && currentQuestion === null && (
        <Result
          correctAnswers={correctAnswers}
          totalQuestions={selectedExam.questions.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
