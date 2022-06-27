import React from 'react';
import Appointment from './Appointment';
import './Appointments.css';




const Appointments = () => {
    return (
        <div className="appointments-body">
            <p className="appointments-title">Upcoming Appointments </p>
            <div className="d-flex">
                <div className="d-flex flex-column me-3">
                    <p className="circle1"></p>
                    <span className="line"></span>
                    <p className="circle2"></p>
                    <span className="line"></span>
                    <p className="circle3"></p>
                    <span className="line"></span>
                    <p className="circle4"></p>
                </div>
                <div>
                    <Appointment />
                    <Appointment />
                    <Appointment />
                    <Appointment />
                </div>
            </div>
        </div>
    );
};

export default Appointments;