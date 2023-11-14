import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Index from './components/Inicio';
import IA900 from './components/IA900';
import { Login } from './login';

function App() {
  return (
    <Router>
      <div className="App d-flex justify-content-center align-items-center" style={{ height: "100vh", width: "75vh", margin: "0 auto" }}>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/ExamenesMicrosoft" element={<Index />} />          
          <Route path="/IA900" element={<IA900 />} />          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
