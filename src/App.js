import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RegistrationComponent from './Components/RegistrationComponent/RegistrationComponent';
import AutorisationComponent from './Components/AutorisationComponent/AutorisationComponent';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <div className="App-container">
        <Routes>
          <Route path="/signup" element={<RegistrationComponent />} />
          <Route path="/login" element={<AutorisationComponent />} />
          <Route path="*" element={<Navigate to="/signup" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
