import React from 'react';
import { Helmet } from 'react-helmet';
import { FaFire } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import goup from '../assets/goup.svg';
import sectionLine from '../assets/section-line.svg';
import slogan from '../assets/video/solgan.mp4';
import webinar5 from '../assets/webinar/webinarfive.webp';
import webinar4 from '../assets/webinar/webinarfour.webp';
import webinar1 from '../assets/webinar/webinarone.webp';
import webinar6 from '../assets/webinar/webinarsix.webp';
import webinar3 from '../assets/webinar/webinarthree.webp';
import webinar2 from '../assets/webinar/webinartwo.webp';
import ImageVideoCard from '../components/ImageVideoCard';
const Resources = () => {
    const images = [webinar1,webinar2,webinar3,webinar4,webinar5,webinar6]
    return (
            <section className='bg-gray-100'>
                <Helmet>
                    <title>RESOURCES | PHConsultancy</title>
                </Helmet>
            <div className="flex bg-gray-100">
            <video
                    className="w-full"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={slogan} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className=" min-h-screen py-10 mx-auto w-11/12"> 
                <div className="flex flex-col lg:flex-row md:flex-row items-center">
                    <div className="w-full lg:w-1/4 md:w-1/4 flex-flex-col p-1 gap-2">
                        <div className="futureScroll">
                            <img src={goup} alt="" />
                            <h2 className='text-teal-800 text-2xl font-bold w-2/3 mx-auto text-center'>Don't miss our events!</h2>
                            <p className="text-gray-500 my-2 w-2/3 mx-auto text-center">Sign up for our Newsletter, and get notified on our upcoming events</p>
                            <button className=" my-2 bg-teal-700 text-white p-3 font-semibold font-montserrat cursor-pointer hover:bg-white hover:border hover:border-gray-400 hover:text-teal-900 rounded-lg flex gap-2 items-center justify-center w-2/3 mx-auto"> <FaFire/> Get Started</button>
                            <img src={sectionLine} className='w-1/3 mx-auto' alt="" />
                            <div className='text-teal-900 flex gap-3 justify-center items-center my-3 text-2xl'>
                                <NavLink to={'/social'} className='font-semibold flex gap-2 items-center'><FaFacebook></FaFacebook></NavLink>
                                <NavLink to={'/social'} className='font-semibold flex gap-2 items-center'><FaLinkedin></FaLinkedin></NavLink>
                                <NavLink to={'/social'} className='font-semibold flex gap-2 items-center'><FaXTwitter></FaXTwitter></NavLink>
                                <NavLink to={'/social'} className='font-semibold flex gap-2 items-center'><FaInstagram></FaInstagram></NavLink>
                                <NavLink to={'/social'} className='font-semibold flex gap-2 items-center'><FaYoutube></FaYoutube></NavLink>
                                </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/4 md:w-3/4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
                    {
                        images.map( (image,index) => <ImageVideoCard key={index} video={slogan} image={image} /> )
                    }
                    {
                        images.map( (image,index) => <ImageVideoCard key={index} video={slogan} image={image} /> )
                    }
                    </div>
                </div>
            </div>
            </section>
    );
};

export default Resources;