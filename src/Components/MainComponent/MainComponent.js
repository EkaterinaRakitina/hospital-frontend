import React, { useState, useEffect }  from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import AddAppointmentComponent from '../AddAppointmentComponent/AddAppointmentComponent';
import TableComponent from '../TableComponent/TableComponent';
import './MainComponent.scss';

const MainComponent = () => {
  const [appointments, setAppointments] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/allAppointments').then((res) => {
      setAppointments(res.data.data);
    });
  }, []);

  const backToRegistration = () => {
    history('/signup');
  };

  return (
    <div className="Main-container">
      <HeaderComponent title="Приемы">
        <button onClick={() => backToRegistration()}>Выход</button>
      </HeaderComponent>
      <AddAppointmentComponent setAppointments={setAppointments} />
      <TableComponent appointments={appointments} />
    </div>
  );
};

export default MainComponent;
