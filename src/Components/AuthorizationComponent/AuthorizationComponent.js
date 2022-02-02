import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import image from '../../img/image.png';
import './AuthorizationComponent.scss';

const AuthorizationComponent = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState({ flag: false, message: '' });
  const { flag, message } = open;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!login || !password) {
      return setOpen({
        flag: true,
        message: 'Заполните все поля',
      });
    } else {
      await axios
        .post('http://localhost:8000/authorization', {
          login,
          password,
        })
        .then((res) => {
          localStorage.setItem('token', res.data.token);
          setLogin('');
          setPassword('');
        });
    }
  };

  const handleCloseSnackbar = () => {
    setOpen({ flag: false, message: '' });
  };

  return (
    <div className="Authorization-container">
      <HeaderComponent title="Войти в систему" />
      <div className="Authorization-wrapper">
        <div className="Image-container">
          <img src={image} alt="hospital" />
        </div>
        <div className="Authorization-form-container">
          <h2>Войти в систему</h2>
          <div className="Form-container">
            <form>
              <label>Login: </label>
              <input
                type="text"
                name="login"
                value={login}
                placeholder="Login"
                onChange={(e) => setLogin(e.target.value)}
              />
              <label>Password: </label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={(e) => handleSubmit(e)}>Войти</button>
              <Link to="/signup">
                <p>Зарегистрироваться</p>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <Snackbar
        open={flag}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={message}
      />
    </div>
  );
};

export default AuthorizationComponent;
