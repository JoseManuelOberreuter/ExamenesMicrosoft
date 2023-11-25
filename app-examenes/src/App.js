import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import IA900 from './components/IA900';
import {Login} from './components/login';
import {Home} from './components/home';

function App() {

  const [user, setUser] = useState([]);

  return (
    <Router>
      <div className="App d-flex justify-content-center align-items-center" style={{ height: "100vh", width: "75vh", margin: "0 auto" }}>
        <Routes>
          {
            ! user.length > 0
            ? <Route path="/Login" element={<Login setUser={setUser}/>} /> 
            : <Route path="/Home" element={<Home />} /> 
          }
                   
                   
          <Route path="/IA900" element={<IA900 />} />          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
