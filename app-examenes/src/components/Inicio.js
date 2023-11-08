import React from "react";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="text-center">
      <h1 className="text-primary">Examenes Microsoft</h1>
      <h2 className="text-secondary small">Aplicación Open Source para practicar diferentes exámenes de certificación</h2>
      <div className="d-flex flex-column my-5">
        <Link to={'/IA900'} className="btn btn-primary m-2">Examen AI-900: Microsoft Azure AI Fundamentals</Link>
        <button className="btn btn-primary m-2" disabled>Examen AZ-900: Microsoft Azure Fundamentals</button>
      </div>
    </div>
  );
}

export default Index;
