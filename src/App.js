import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RegistrationComponent from './Components/RegistrationComponent/RegistrationComponent';
import AuthorizationComponent from './Components/AuthorizationComponent/AuthorizationComponent';
import MainComponent from './Components/MainComponent/MainComponent';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <div className="App-container">
        <Routes>
          <Route path="/signup" element={<RegistrationComponent />} />
          <Route path="/login" element={<AuthorizationComponent />} />
          <Route path="/main" element={<MainComponent />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
