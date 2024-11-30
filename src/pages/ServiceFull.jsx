import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';
import adhd from '../assets/service/adhd.svg';
import anxiety from '../assets/service/anxiety.svg';
import stress from '../assets/service/stress.svg';
import trauma from '../assets/service/trauma.svg';
import Feedback from '../components/Feedback';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';

const ServiceFull = () => {
    const service = useLoaderData();
    const { id,name, image, description, category, price, counselorName, duration, rating } = service;
    // console.log(service);
    return (
        <>
        <Helmet>
                <title>{name} | PHConsultancy</title>
        </Helmet>
        <header>
                <div className=' bg-teal-600 py-3 '><TopBar/></div>
        </header>
        <section className='sticky top-0 z-[999] bg-base-100 '>
            <div className='mx-auto w-full px-2 lg:w-10/12 md:w-10/12'><Navbar></Navbar></div>
        </section>
        <main>
          <section className="grid text-base-content bg-teal-700 gap-5">
            <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mx-auto w-11/12 text-white py-20">
                <div className='flex flex-col px-5 gap-4'>
                    <div className="font-bold text-3xl text-center">{name}</div>
                    <div className="divider mx-auto w-2/3"></div>
                    <div className="text-justify">{description}</div>
                    <Link to={`/service/${id}`} className="btn btn-error">Talk With Our Experts </Link>
                </div>
                <div className="mx-auto grid grid-cols-2 gap-2 w-5/6 ">
                    <img src={adhd} alt="adhd" className='h-40 w-full rounded-xl bg-teal-400' />
                    <img src={anxiety} alt="adhd" className='h-40 w-full rounded-xl bg-teal-400' />
                    <img src={stress} alt="adhd" className='h-40 w-full rounded-xl bg-teal-400' />
                    <img src={trauma} alt="adhd" className='h-40 w-full rounded-xl bg-teal-400' />
                </div>
            </div>
          </section>
          <section className="grid text-base-content bg-base-100 gap-5">
            <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mx-auto w-11/12 text-teal-800 py-20">
            <div className="overflow-x-auto">
                
                <h2 className="text-2xl text-teal-800 my-2 font-semibold underline">Course Details</h2>
                <table className="table">
                    
                    <tbody>
                    <tr><th>Category</th><td>{category || "N/A"}</td></tr>
                    <tr><th>Price</th><td>{price || "N/A"}</td></tr>
                    <tr><th>Counselor Name</th><td>{counselorName || "N/A"}</td></tr>
                    <tr><th>Duration</th><td>{duration || "N/A"}</td></tr>
                    <tr><th>Rating</th><td>{rating || "N/A"}</td></tr>
                    </tbody>
                </table>
                </div>
                <div className="">
                    <h2 className="text-teal-800 text-2xl font-semibold underline">Feedbacks/Comments</h2>
                    <Feedback></Feedback>
                </div>
            </div>
          </section>
        </main>
        <Footer/>
    </>
    );
};

export default ServiceFull;