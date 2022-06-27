import React from 'react';
import './Appointment.css'

const Appointment = () => {
    return (
        <div className="d-flex mb-4">
            <div className="appointment-date">
                <span>22</span>
                <p className="p-date my-2">13</p>
                <p className="p-month">Sep</p>
            </div>
            <div className="appointment-info">
                <p className="d-name"> Dr. Muhammad Abdul Hussein</p>
                <p className="d-spe">Cardiologist</p>
                <div className="d-flex d-details">
                    <p> <span> Slot</span> <span>Morning </span> </p>
                    <p> <span> Time</span> <span>10.00AM </span> </p>
                </div>
            </div>
        </div>
    );
};

export default Appointment;