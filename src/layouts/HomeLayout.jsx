import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Experts from '../components/Home/Experts';
import GetInTouch from '../components/Home/GetInTouch';
import Hero from '../components/Home/Hero';
import Services from '../components/Home/Services';
import Testimonial from '../components/Home/Testimonial';
import WhyUs from '../components/Home/WhyUs';
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';

const HomeLayout = () => {
    return (
        <div>
            <Helmet>
                <title>Home | PHConsultancy</title>
            </Helmet>
            <header>
                <div className=' bg-teal-600 py-3 '><TopBar/></div>
            </header>
            <section className='sticky top-0 z-[999] bg-base-100 '>
                <div className='mx-auto w-full px-2 lg:w-10/12  md:w-10/12'><Navbar></Navbar></div>
            </section>
            <main>
                <Hero></Hero>
                <Services></Services>
                <WhyUs/>
                <Experts/>
                <Testimonial/>
                <GetInTouch/>
            </main>
            <footer ><Footer/></footer>
        </div>
    );
};

export default HomeLayout;