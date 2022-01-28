import React from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import image from '../../img/image.png';
import './RegistrationComponent.scss';

const RegistrationComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
  };

  return (
    <div className="Registration-container">
      <HeaderComponent title="Зарегистрироваться в системе" />
      <div className="Registration-wrapper">
        <div className="Image-container">
          <img src={image} alt="hospital" />
        </div>
        <div className="Registration-form-container">
          <h2>Регистрация</h2>
          <div className="Form-container">
            <form onSubmit={handleSubmit}>
              <label>Login: </label>
              <input type="text" name="login" placeholder="Login" />
              <label>Password: </label>
              <input type="password" name="password" placeholder="Password" />
              <label> Repeat password: </label>
              <input
                type="password"
                name="repeatPassword"
                placeholder="Password"
              />
              <button>Зарегистрироваться</button>
              <Link to="/login">
                <p>Авторизоваться</p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationComponent;
