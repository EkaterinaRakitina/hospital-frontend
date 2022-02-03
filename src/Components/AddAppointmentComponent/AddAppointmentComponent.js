import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './AddAppointmentComponent.scss';

const AddAppointmentComponent = ({ setAppointments }) => {
  const [name, setName] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [symptom, setSymptom] = useState('');

  const doctorsName = [
    { label: 'Иванов Иван Иванович' },
    { label: 'Петров Иван Иванович' },
    { label: 'Петров Иван Иванович' },
  ];

  const AddNewAppointment = async () => {
    await axios
      .post('http://localhost:8000/createAppointment', {
        name,
        doctor,
        date,
        symptom,
      })
      .then((res) => {
        setName('');
        setDoctor('');
        setDate('');
        setSymptom('');
        setAppointments(res.data.data);
      });
  };

  return (
    <div className="AddAppointment-container">
      <div className="AddAppointment-wrapper">
        <div>
          <label>Имя:</label>
          <Box
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              '& > :not(style)': { m: 1 },
            }}
          >
            <TextField id="demo-helper-text-misaligned-no-helper" />
          </Box>
        </div>
        <div>
          <label>Врач:</label>
          <Autocomplete
            type="text"
            name="doctor"
            onChange={(e) => setDoctor(e.target.value)}
            disablePortal
            id="combo-box-demo"
            options={doctorsName}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="" />}
          />
        </div>
        <div>
          <label>Дата:</label>
          <Box
            type="text"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              '& > :not(style)': { m: 1 },
            }}
          >
            <TextField id="demo-helper-text-misaligned-no-helper" />
          </Box>
        </div>
        <div>
          <label>Жалобы:</label>
          <Box
            type="text"
            name="symptom"
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              '& > :not(style)': { m: 1 },
            }}
          >
            <TextField id="demo-helper-text-misaligned-no-helper" />
          </Box>
        </div>

        <button
          className="AddAppointment-button"
          onClick={() => AddNewAppointment()}
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

export default AddAppointmentComponent;
