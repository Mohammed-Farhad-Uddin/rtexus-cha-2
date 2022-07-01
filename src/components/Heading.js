import React from 'react';
import './Heading.css';
import toggleLight from '../images/Toggle button.png';
import avatar from '../images/Avatar.png';
import iconDown from '../images/Icon_downArrow.png';
import toggleDark from '../images/Toggle button-1.png';

const Heading = ({ setDark, dark }) => {
    return (
        <div className="heading">
            {!dark ? <img className="toggle" src={toggleLight} alt="" onClick={() => setDark(!dark)} /> : <img className="toggle" src={toggleDark} alt="" onClick={() => setDark(!dark)} />}
            <img className="avatar" src={avatar} alt="" />
            <img className="downIcon" src={iconDown} alt="" />
        </div>
    );
};

export default Heading;