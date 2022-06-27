import React from 'react';
import menu from '../images/Icon_Menu.png';
import person from '../images/Icon_Patient Profile.png';
import setting from '../images/Icon_Settings.png';
import home from '../images/Icon_Home.png';
import appointment from '../images/Icon_Appointment.png';
import clock from '../images/Icon_medical history.png';
import plus from '../images/Button/Primary/round.png'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src={menu} alt="" />
            <img src={home} alt="" />
            <img src={person} alt="" />
            <img src={appointment} alt="" />
            <img src={clock} alt="" />
            <img src={setting} alt="" />
            <img src={plus} alt="" />

        </div>
    );
};

export default Sidebar;