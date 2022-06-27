import React from 'react';
import heart from '../images/Icon_Heart.png';
import blood from '../images/Icon_Blood_pressure.png';
import oxyzen from '../images/Icon_bubble.png';
import sugar from '../images/Icon_Blood_sugar.png';
import Box from './Box';


const Boxes = () => {
    return (
        <div className="d-flex">
            <Box title="Pulse Count" des="60 bpm" foot="Normal" alt="Pulse Count" img1={heart} />
            <Box title="Blood Pressure" des="110/70 mmHg" foot="Slightly higher" alt="Blood Pressure" img1={blood} />
            <Box title="Oxygen Saturation " des="97%" foot="Slightly higher" alt="Oxygen Saturation " img1={oxyzen} />
            <Box title="Glucose Count" des="100 mm/dL" foot="Normal" alt="Glucose Count" img1={sugar} />
        </div>
    );
};

export default Boxes;