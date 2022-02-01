import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import image from '../../img/image.png';
import './RegistrationComponent.scss';

const RegistrationComponent = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [open, setOpen] = useState({ flag: false, message: '' });
  const { flag, message } = open;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const repassword = /^[A-Za-z0-9]{5,}\d{1,}$/;

    if (login.length > 5) {
      if (repassword.test(password)) {
        if (password !== repeatPassword) {
          return setOpen({
            flag: true,
            message: 'Пароли не совпадают. Повторите попытку',
          });
        } else {
          await axios
            .post('http://localhost:8000/registration', {
              login,
              password,
            })
            .then((res) => {
              localStorage.setItem('token', res.data.token);
            //  history.push('/main');
              setLogin('');
              setPassword('');
              setRepeatPassword('');
            });
        }
      } else {
        return setOpen({
          flag: true,
          message:
            'Неверно введен пароль. Пароль должен содержать не меньше 6 латинских символов. Обязательно должен содержать 1 число',
        });
      }
    } else {
      return setOpen({
        flag: true,
        message:
          'Неверно введен логин. Логин должен содержать не меньше 6 символов',
      });
    }
  };

  const handleCloseSnackbar = () => {
    setOpen({ flag: false, message: '' });
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
              <label> Repeat password: </label>
              <input
                type="password"
                name="repeatPassword"
                value={repeatPassword}
                placeholder="Password"
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
              <button onClick={(e) => handleSubmit(e)}>
                Зарегистрироваться
              </button>
              <Link to="/login">
                <p>Авторизоваться</p>
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

export default RegistrationComponent;
