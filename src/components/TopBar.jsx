import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationDot, FaMessage, FaPhone, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const TopBar = () => {
    return (
        <div className='grid md:flex lg:flex justify-center mx-auto w-11/12 items-center md:justify-between lg:justify-between gap-5 text-[14px]  lg:text-[16px] md:text-[16px]'>
            <div className='flex gap-3 justify-center md:justify-start lg:justify-start'>
                <div className='text-white font-semibold flex gap-2 items-center'><FaPhone></FaPhone> +88-01861396965</div>
                <div className='text-white font-semibold flex gap-2 items-center'><FaMessage></FaMessage> info@email.com</div>
            </div>
            <div className='flex gap-3 items-center justify-center md:flex-row-reverse'>
                <div className='text-white font-semibold flex gap-2 items-center  '><FaLocationDot></FaLocationDot> Dhaka,Bangladesh </div>
                <span className='text-white font-semibold flex gap-2'>|</span>
                <NavLink to={'/social'} className='text-white font-semibold flex gap-2 items-center text-xl'><FaFacebook></FaFacebook></NavLink>
                <NavLink to={'/social'} className='text-white font-semibold flex gap-2 items-center text-xl'><FaLinkedin></FaLinkedin></NavLink>
                <NavLink to={'/social'} className='text-white font-semibold flex gap-2 items-center text-xl'><FaXTwitter></FaXTwitter></NavLink>
                <NavLink to={'/social'} className='text-white font-semibold flex gap-2 items-center text-xl'><FaInstagram></FaInstagram></NavLink>
                <NavLink to={'/social'} className='text-white font-semibold flex gap-2 items-center text-xl'><FaYoutube></FaYoutube></NavLink>
            </div>
        </div>
    );
};

export default TopBar;