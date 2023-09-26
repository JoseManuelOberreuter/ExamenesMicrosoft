// src/components/Inicio.js
import React from "react";

function Inicio({ onLogout, onExamSelection }) {
  return (
    <div>
      <h1>Bienvenido</h1>
      <button onClick={onExamSelection}>Hacer examen</button>
      <button>Practicar</button>
      <button>Material de estudio</button>
      <button>Resultados de test</button>
      <button>Estadísticas</button>
      <button>Perfil</button>
      <button>Ayuda y soporte</button>
      <button onClick={onLogout}>Cerrar sesión</button>
    </div>
  );
}

export default Inicio;
