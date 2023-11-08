import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Index from './components/Inicio';
import IA900 from './components/IA900';

function App() {
  return (
    <Router>
      <div className="App d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Routes>

          <Route path="/ExamenesMicrosoft" element={<Index />} />          
          <Route path="/IA900" element={<IA900 />} />          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
