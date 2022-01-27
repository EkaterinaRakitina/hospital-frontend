import React from 'react';
import logo from '../../img/logo.svg';
import './HeaderComponent.scss';

const HeaderComponent = () => {
  return (
    <header className="Header-container">
      <div>
          <img src={logo} alt="logo"/>
        <h1>Зарегистрироваться в системе</h1>
      </div>
    </header>
  );
};

export default HeaderComponent;
