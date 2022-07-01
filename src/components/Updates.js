import React from 'react';
import './Updates.css';
import sample2 from '../images/Svg_sample2.png';


const Updates = ({ dark}) => {
    return (
        <div className="update"  style={{ background: `${!dark ? "#FFFFFF" : "rgba(255, 255, 255, 0.1)"}` , borderColor:`${dark? "rgba(255, 255, 255, 0)" :"#EDEBEB"}` }}>
            <div className="d-flex">
                <p className="covid me-5" style={{ color: `${dark ? "#FFFFFF" : "#231F20"}` }}>Covid-19 updates</p>
                <div className="ms-5">
                    <p className="covid" style={{ color: `${dark ? "#FFFFFF" : "#231F20"}` }}>10 September 2022</p>
                    <p className="covid-time" style={{ color: `${dark ? "#FFFFFF" : "#8A8686"}` }}>Thursday 10.00.00 AM</p>
                </div>
            </div>
            <div className="d-flex position-relative" >
                <img src={sample2} alt="" />
                <div className="infect-info">
                    <p>Infection Number</p>
                    <h5>500</h5>
                    <p>Infection Rate</p>
                    <h5>10%</h5>
                </div>
                <div className="scale">
                </div>
            </div>
        </div>
    );
};

export default Updates;