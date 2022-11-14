import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Share/Footer/Footer';
import Navbar from '../Pages/Share/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;