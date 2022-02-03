import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import './TableComponent.scss';

const TableComponent = ({ appointments }) => {

  return (
    <div className="Table-container">
      <div className="Table-wrapper">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Имя</TableCell>
                <TableCell align="center">Врач</TableCell>
                <TableCell align="center">Дата</TableCell>
                <TableCell align="center">Жалобы</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow
                  key={ appointment._id }
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center">{appointment.name}</TableCell>
                  <TableCell align="center">{appointment.doctor}</TableCell>
                  <TableCell align="center">{appointment.date}</TableCell>
                  <TableCell align="center">{appointment.symptom}</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default TableComponent;
