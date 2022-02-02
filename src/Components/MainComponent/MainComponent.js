import React from 'react';
import { useNavigate } from 'react-router';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import AddAppointmentComponent from '../AddAppointmentComponent/AddAppointmentComponent';
import TableComponent from '../TableComponent/TableComponent';
import './MainComponent.scss';

const MainComponent = () => {
  const history = useNavigate();

  const backToRegistration = () => {
    history('/signup');
  };

  return (
    <div className="Main-container">
      <HeaderComponent title="Приемы">
        <button onClick={() => backToRegistration()}>Выход</button>
      </HeaderComponent>
      <AddAppointmentComponent />
      <TableComponent />
    </div>
  );
};

export default MainComponent;
