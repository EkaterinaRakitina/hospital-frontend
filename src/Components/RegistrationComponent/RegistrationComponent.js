import React from 'react';
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
      <HeaderComponent />
      <div className="Registration-wrapper">
        <div className="Image-container">
          <img src={image} alt="hospital" />
        </div>
        <div className="Registration-form-container">
          <h2>Регистрация</h2>
          <div className="Form-container">
            <form onSubmit={handleSubmit}>
              <label>Login: </label>
              <input type="text" id="login" name="login" placeholder="Login" />
              <label>Password: </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <label> Repeat password: </label>
              <input
                type="password"
                id="repeatPassword"
                name="repeatPassword"
                placeholder="Password"
              />
              <button>Зарегистрироваться</button>
              <p href="#">Авторизоваться</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationComponent;
