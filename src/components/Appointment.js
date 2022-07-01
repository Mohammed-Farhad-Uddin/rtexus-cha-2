import React from 'react';
import './Appointment.css'

const Appointment = ({ dark}) => {
    return (
        <div className="d-flex mb-4">
            <div className="appointment-date"  >
                <span>22</span>
                <p className="p-date my-2">13</p>
                <p className="p-month">Sep</p>
            </div>
            <div className="appointment-info" style={{ background: `${!dark ? "#FFF5F5" : "rgba(255, 255, 255, 0.1)"}` }}>
                <p className="d-name" style={{ color: `${!dark ? "#384449" : "white"}` }}> Dr. Muhammad Abdul Hussein</p>
                <p className="d-spe" style={{ color: `${!dark ? "#2E1619" : "white"}` }} >Cardiologist</p>
                <div className="d-flex d-details">
                    <p> <span> Slot</span> <span>Morning </span> </p>
                    <p> <span> Time</span> <span>10.00AM </span> </p>
                </div>
            </div>
        </div>
    );
};

export default Appointment;