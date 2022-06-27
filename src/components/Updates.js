import React from 'react';
import './Updates.css';
import sample2 from '../images/Svg_sample2.png';


const Updates = () => {
    return (
        <div className="update mt-3">
            <div className="d-flex">
                <p className="covid me-5">Covid-19 updates</p>
                <div className="ms-5">
                    <p className="covid">10 September 2022</p>
                    <p className="covid-time">Thursday 10.00.00 AM</p>
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