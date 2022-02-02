import React from 'react';
import logo from '../../img/logo.svg';
import './HeaderComponent.scss';

const HeaderComponent = (props) => {
  const { title } = props;

  return (
    <header className="Header-container">
      <div className="Header-wrapper">
        <div>
          <img src={logo} alt="logo" />
          <h1>{title}</h1>
        </div>
        {props.children}
      </div>
    </header>
  );
};

export default HeaderComponent;
