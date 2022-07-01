import React from 'react';
import Appointment from './Appointment';
import './Appointments.css';




const Appointments = ({ dark}) => {
    return (
        <div className="appointments-body" style={{ background: `${!dark ? "#FFFFFF" : "rgba(255, 255, 255, 0.1)"}`, borderColor:`${dark? "rgba(255, 255, 255, 0)" :"#EDEBEB"}` }}>
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
                    <Appointment dark={dark} />
                    <Appointment dark={dark} />
                    <Appointment dark={dark}/>
                    <Appointment dark={dark}/>
                </div>
            </div>
        </div>
    );
};

export default Appointments;