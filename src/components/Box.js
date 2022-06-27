import React from 'react';
import './Box.css';
import vector from '../images/Vector.png';

const Box = ({ title, des, foot, img1, img2, alt }) => {
    return (
        <div className="col-3">
            <div className="box">
                <img src={img1} alt="sdiosfio" />
                <p>{title}</p>
                <h5>{des}</h5>
                <div>
                    <img src={vector} alt={alt} />
                    <span>{foot}</span>
                </div>
            </div>
        </div>
    );
};

export default Box;