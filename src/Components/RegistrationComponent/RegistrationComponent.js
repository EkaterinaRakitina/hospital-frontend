import React from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import image from '../../img/image.png';
import './RegistrationComponent.scss';

const RegistrationComponent = () => {
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
            <form>
              <label>Login: </label>
              <input type="login" id="login" name="login" placeholder="Login"/>
              <label>Password: </label>
              <input type="password" id="password" name="password" placeholder="Password" />
              <label> Repeat password: </label>
              <input type="repeat" id="repeat" name="repeat" placeholder="Password" />
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
