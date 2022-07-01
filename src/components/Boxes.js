import React from 'react';
import heart from '../images/Icon_Heart.png';
import blood from '../images/Icon_Blood_pressure.png';
import oxyzen from '../images/Icon_bubble.png';
import sugar from '../images/Icon_Blood_sugar.png';
import Box from './Box';
import heartDark from '../images-dark/Frame 2847.png';
import bloodDark from '../images-dark/Frame 2846.png';
import oxyzenDark from '../images-dark/Frame 2849.png';
import sugarDark from '../images-dark/Frame 2848.png';


const Boxes = ({dark}) => {
    return (
        <div className="d-flex mt-4 mb-5">
            <Box dark={dark} className="me-4" title="Pulse Count" des="60 bpm" foot="Normal" alt="Pulse Count" img1={!dark?heart:heartDark} />
            <Box dark={dark} className="me-4 ms-1" title="Blood Pressure" des="110/70 mmHg" foot="Slightly higher" alt="Blood Pressure" img1={!dark?blood:bloodDark} />
            <Box dark={dark} className="me-4 ms-1" title="Oxygen Saturation " des="97%" foot="Slightly higher" alt="Oxygen Saturation " img1={!dark?oxyzen:oxyzenDark} />
            <Box dark={dark} className="ms-2" title="Glucose Count" des="100 mm/dL" foot="Normal" alt="Glucose Count" img1={!dark?sugar:sugarDark} />
        </div>
    );
};

export default Boxes;