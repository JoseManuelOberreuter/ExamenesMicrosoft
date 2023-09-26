// src/components/Login.js
import React, { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleLogin = () => {
    if (username === "admin" && password === "123") {
      onLogin(username);
    } else {
      setLoginError(true);
    }
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <div>
        <label>Nombre de usuario:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Iniciar</button>
      {loginError && (
        <p style={{ color: "red" }}>Usuario o contraseña incorrecta</p>
      )}
    </div>
  );
}

export default Login;
