import React from 'react';
import HeroSection from '../context/Hero.jsx';
import Course from '../context/Defensive201.jsx';
import Navbar from '../context/Navbar.jsx';
import { Outlet } from 'react-router-dom';



const Root = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Outlet />
            </div>
            <HeroSection />
        </div>
    );
};

export default Root;