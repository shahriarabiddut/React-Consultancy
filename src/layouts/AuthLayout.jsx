import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-[#F3F3F3]'>
            <header className=' sticky top-0 z-[999] bg-base-100'>
               <div className='mx-auto w-full px-2 lg:w-10/12 md:w-10/12'><Navbar /></div> 
            </header>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default AuthLayout;