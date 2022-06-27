import React from 'react';
import './Home.css';
import sample1 from '../images/Svg_sample1.png';




const Home = () => {
    return (
        <>
            <div className="home-heading">
                <img src={sample1} alt="" />
                <div className="home-heading-div2">
                    <h1>
                        Hello, Mary Jane!
                    </h1>
                    <p> Stay Up-to-Date with your appointments.</p>
                    <p> You Have No pending Reports</p>
                </div>
            </div>
        </>
    );
};

export default Home;