import React from 'react';
import menu from '../images/Icon_Menu.png';
import menuDark from '../images-dark/Icon_Menu.png';
import person from '../images/Icon_Patient Profile.png';
import personDark from '../images-dark/Icon_Patient Profile.png';
import setting from '../images/Icon_Settings.png';
import settingDark from '../images-dark/Icon_Settings.png';
import home from '../images/Icon_Home.png';
import homeDark from '../images-dark/Icon_Home.png';
import appointment from '../images/Icon_Appointment.png';
import appointmentDark from '../images-dark/Icon_Appointment.png';
import clock from '../images/Icon_medical history.png';
import clockDark from '../images-dark/Icon_medical history.png';
import plus from '../images/Button/Primary/round.png';
import plusVector from '../images/Icon_Vector.png';
import './Sidebar.css';
import iconSideArrow from '../images/Icon_SideArrow_round.png';
import iconSideArrowDark from '../images-dark/Icon_SideArrow_round.png';

const Sidebar = ({ dark, sideBar, setSideBar }) => {



    return (
        <div className={`${sideBar ? "sidebar" : "sidebar-false"}`} style={{ background: `${!dark ? "#FFFFFF" : "#2E1619"}` }}>
            <div className="sidebar-body">
                <div className="d-flex">
                    {sideBar ? <>
                        <img className="h-100" src={plusVector} alt="" />
                        <h2 className="ms-3 me-3"><span style={{ color: `${!dark ? "black" : '#FFFFFF'}` }} >Medi</span><span style={{ color: '#FF7594' }}>Doc</span></h2>
                        {!dark ? <img className="ms-1" src={iconSideArrow} alt="" onClick={() => setSideBar(!sideBar)} /> : <img className="sideIcon" src={iconSideArrowDark} alt="" onClick={() => setSideBar(!sideBar)} />}
                    </> : (<>{!dark ? <img src={menu} alt="" onClick={() => setSideBar(!sideBar)} /> : <img src={menuDark} alt="" onClick={() => setSideBar(!sideBar)} />}</>)
                    }

                </div>
                <div>
                    <div className="d-flex my-4 align-items-center">
                        {!dark ? <img src={home} alt="" /> : <img src={homeDark} alt="" />}
                        {sideBar ? <h5 className='ms-3' style={{ color: '#FF7594' }}>Home</h5> : null}
                    </div>
                    <div className="d-flex my-4 align-items-center">
                        {!dark ? <img src={person} alt="" /> : <img src={personDark} alt="" />}
                        {sideBar ? <h5 className='ms-3' style={{ color: `${dark ? "#FFFFFF":"black"}` }} >Patient Profile</h5> : null}
                    </div>
                    <div className="d-flex my-4 align-items-center">
                        {!dark ? <img src={appointment} alt="" /> : <img src={appointmentDark} alt="" />}
                        {sideBar ? <h5 className='ms-3'style={{ color: `${dark ? "#FFFFFF":"black"}` }}>Appointments</h5> : null}

                    </div>
                    <div className="d-flex my-4 align-items-center">
                        {!dark ? <img src={clock} alt="" /> : <img src={clockDark} alt="" />}
                        {sideBar ? <h5 className='ms-3' style={{ color: `${dark ? "#FFFFFF":"black"}` }}>Medical History</h5> : null}

                    </div>

                    <div className="d-flex my-4 align-items-center" >
                        {!dark ? <img src={setting} alt="" /> : <img src={settingDark} alt="" />}
                        {sideBar ? <h5 className='ms-3' style={{ color: `${dark ? "#FFFFFF":"black"}` }}>Settings</h5> : null}

                    </div>
                </div>
            </div>
            <div>
                <div className="new-appointment" >

                    {sideBar ? <p > New appointment </p> : <img className="new-appointment-btn" src={plus} alt="" />}

                </div>
            </div>
        </div>
    );
};

export default Sidebar;