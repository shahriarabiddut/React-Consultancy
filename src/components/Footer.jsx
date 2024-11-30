import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationDot, FaMessage, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="grid bg-teal-500 text-white grid-cols-3 md:grid-cols-6 lg:grid-cols-12 pb-10 gap-4 px-10 ">
  <aside className="col-span-3 py-5 px-5 bg-teal-800">
      <h2 className=" font-montserrat font-bold text-teal-400 text-2xl py-2">PHConsultancy Ltd.</h2>
    <p className="text-justify text-xs">
      We are a team of professionals with varied backgrounds such as psychology, merchandising, technology, human resources, general management, manufacturing, and education. We are passionate about our work, your career, and the science behind it.
    </p>
    <div className="pt-4">
      <label className="input input-bordered flex items-center gap-2 relative ">
        <input type="text" className="grow text-teal-800" placeholder="Place A CallBack" />
        <button className="btn btn-xl btn-info absolute -right-1"><FaPhone></FaPhone></button>
      </label>
    </div>
  </aside>
  <div className="col-span-3 pt-10 px-5 flex flex-col gap-2">
    <h6 className="text-white font-bold text-xl">Get In Touch</h6>
    <div className='text-white font-semibold flex gap-2 items-center  '><FaLocationDot></FaLocationDot> Dhaka,Bangladesh </div>
    <div className='text-white font-semibold flex gap-2 items-center'><FaPhone></FaPhone> +88-01861396965</div>
    <div className='text-white font-semibold flex gap-2 items-center'><FaMessage></FaMessage> info@email.com</div>
    <div className='flex gap-3 items-center '>
          <NavLink to={'/social'} className='text-white font-semibold flex gap-2 items-center text-xl'><FaFacebook></FaFacebook></NavLink>
          <NavLink to={'/social'} className='text-white font-semibold flex gap-2 items-center text-xl'><FaLinkedin></FaLinkedin></NavLink>
          <NavLink to={'/social'} className='text-white font-semibold flex gap-2 items-center text-xl'><FaXTwitter></FaXTwitter></NavLink>
          <NavLink to={'/social'} className='text-white font-semibold flex gap-2 items-center text-xl'><FaInstagram></FaInstagram></NavLink>
          <NavLink to={'/social'} className='text-white font-semibold flex gap-2 items-center text-xl'><FaYoutube></FaYoutube></NavLink>
      </div>
  </div>
  <div className="col-span-3 pt-10 px-5 flex flex-col gap-1">
    <h6 className="text-white font-bold text-xl">Our Services</h6>
    <NavLink to={'/404'} className="link link-hover">Personality Development</NavLink>
    <NavLink to={'/404'} className="link link-hover">Psychological Counselling</NavLink>
    <NavLink to={'/404'} className="link link-hover">Career Coaching and Mentoring</NavLink>
    <NavLink to={'/404'} className="link link-hover">Job Interview Skills</NavLink>
    <NavLink to={'/404'} className="link link-hover">Professional CV Writing</NavLink>
  </div>
  <div className="col-span-3 pt-10 px-5 flex flex-col gap-1">
    <h6 className="text-white font-bold text-xl">Legal</h6>
    <NavLink to={'/404'} className="link link-hover">Terms of use</NavLink>
    <NavLink to={'/404'} className="link link-hover">Privacy policy</NavLink>
    <NavLink to={'/404'} className="link link-hover">Cookie policy</NavLink>
  </div>
      </section>
      <h2 className=" font-montserrat font-bold bg-teal-500 text-3xl py-2 px-10 underline">Available IN.</h2>
      <section className="grid bg-teal-500 text-white grid-cols-3 md:grid-cols-6 lg:grid-cols-12 pb-10 gap-4 px-10 ">
        <div className="col-span-3 pt-10 px-5 flex flex-col gap-1">
          <NavLink to={'/404'} className="link link-hover">Dhaka</NavLink>
          <NavLink to={'/404'} className="link link-hover">Cumilla</NavLink>
          <NavLink to={'/404'} className="link link-hover">Khulna</NavLink>
          <NavLink to={'/404'} className="link link-hover">Jashore</NavLink>
        </div>
        <div className="col-span-3 pt-10 px-5 flex flex-col gap-1">
          <NavLink to={'/404'} className="link link-hover">Barishal</NavLink>
          <NavLink to={'/404'} className="link link-hover">Chattagram</NavLink>
          <NavLink to={'/404'} className="link link-hover">Mymensingh</NavLink>
          <NavLink to={'/404'} className="link link-hover">Shylet</NavLink>
        </div>
        <div className="col-span-3 pt-10 px-5 flex flex-col gap-1">
          <NavLink to={'/404'} className="link link-hover">Rajshahi</NavLink>
          <NavLink to={'/404'} className="link link-hover">Bogura</NavLink>
          <NavLink to={'/404'} className="link link-hover">Rongpur</NavLink>
          <NavLink to={'/404'} className="link link-hover">Tangail</NavLink>
        </div>
        <div className="col-span-3 pt-10 px-5 flex flex-col gap-1">
          <NavLink to={'/404'} className="link link-hover">Gazipur</NavLink>
          <NavLink to={'/404'} className="link link-hover">Uttara</NavLink>
          <NavLink to={'/404'} className="link link-hover">Gulshan</NavLink>
          <NavLink to={'/404'} className="link link-hover">Banani</NavLink>
        </div>
      </section>
      <section className="bg-black p-5 mx-auto ">
          <p className="text-center text-white">All Rights Reserved by @2024 PHConsultancy Ltd.</p>
      </section>
      </>
  );
};

export default Footer;
