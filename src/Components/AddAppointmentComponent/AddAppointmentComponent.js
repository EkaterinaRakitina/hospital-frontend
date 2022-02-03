import React from 'react';
import './AddAppointmentComponent.scss';

const AddAppointmentComponent = () => {
  return (
    <div className="AddAppointment-container">
      <div className="AddAppointment-wrapper">
          <div>
            <label>Имя:</label>
            <input type="text" name="name"></input>
          </div>
          <div>
            <label>Врач:</label>
            <input type="text" name="doctor"></input>
          </div>
          <div>
            <label>Дата:</label>
            <input type="text" name="date"></input>
          </div>
          <div>
            <label>Жалобы:</label>
            <input type="text" name="symptom"></input>
          </div>

          <button>Добавить</button>
      </div>
    </div>
  );
};

export default AddAppointmentComponent;
