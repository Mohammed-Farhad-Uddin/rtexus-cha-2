import React from 'react';
import './Box.css';
import vector from '../images/Vector.png';
import vectorDark from '../images-dark/Vector.png';

const Box = ({ title, des, foot, img1, alt , className,dark }) => {
    return (
        <div className={`${className}`}>
            <div className="box" style={{ background: `${dark? "rgba(255, 255, 255, 0.1)":"#FFFFFF"}` ,borderColor:`${dark? "rgba(255, 255, 255, 0)" :"#EDEBEB"}` }}>
                <img src={img1} alt="sdiosfio" />
                <p style={{ color: `${dark? "#FFFFFF":"#2E1619"}` }}>{title}</p>
                <h5 style={{ color: `${dark? "#FFFFFF":"#4A3D3F"}` }} >{des}</h5>
                <div>
                   {dark? <img src={vectorDark} alt={alt} />: <img src={vector} alt={alt} />}
                    <span style={{ color: `${dark? "#FFFFFF":"#03922B"}` }} >{foot}</span>
                </div>
            </div>
        </div>
    );
};

export default Box;