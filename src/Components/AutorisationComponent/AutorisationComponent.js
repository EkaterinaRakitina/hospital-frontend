import React from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import image from '../../img/image.png';
import './AutorisationComponent.scss';

const AutorisationComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
  };

  return (
    <div className="Autorisation-container">
      <HeaderComponent title="Войти в систему" />
      <div className="Autorisation-wrapper">
        <div className="Image-container">
          <img src={image} alt="hospital" />
        </div>
        <div className="Autorisation-form-container">
          <h2>Войти в систему</h2>
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
              <button>Войти</button>
              <Link to="/signup">
                <p>Зарегистрироваться</p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutorisationComponent;
