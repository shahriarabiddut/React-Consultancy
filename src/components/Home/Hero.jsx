import React, { useEffect, useState } from 'react';
import { FaClock, FaLaptop, FaUsers } from 'react-icons/fa';
import herobg from '../../assets/dotted-world-map.webp';
import Counter from './Counter';
import Slider from './Slider';
const Hero = () => {
    const messages = ["Implement Your Career Plan Rationally","Discover Your Talent and Passion Scientifically"];
    const [message, setMessage] = useState("");
    const [messageIndex, setMessageIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
        if (charIndex < messages[messageIndex].length) {
        const timeout = setTimeout(() => {
            setMessage((prev) => prev + messages[messageIndex][charIndex]);
            setCharIndex((prev) => prev + 1);
        }, 100);
        return () => clearTimeout(timeout);
        } else {
        const timeout = setTimeout(() => {
            setMessage("");
            setCharIndex(0);
            setMessageIndex((prev) => (prev + 1) % messages.length);
        }, 1000);
        return () => clearTimeout(timeout);
        }
    }, [charIndex, messageIndex]);
    return (
        <div className='mx-auto w-10/12'>
            <div className="relative grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 lg:gap-20 min-h-screen pt-20 ">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${herobg})` }}
                ></div>
                <div className="absolute inset-0 bg-white bg-opacity-80"></div>
                <div className="relative z-10 text-white flex flex-col gap-2 left-0 md:left-10 lg:left-10">
                    <h2 className="text-xl text-teal-800 font-bold">SCIENTIFIC & DATA DRIVEN</h2>
                    <h2 className="text-5xl text-teal-800 font-bold w-auto lg:w-3/4 md:w-3/4 my-4 mx-auto lg:mx-0 md:mx-0">Get Right Career Options With Scientific Career Counselling</h2>
                    <div className='divider w-3/4'></div>
                    <div className="font-bold text-teal-800">
                        {message}.
                    </div>
                    <div className="w-auto lg:w-2/3 md:w-2/3 my-4 mx-auto lg:mx-0 md:mx-0" >
                        <button className='bg-teal-600 font-semibold py-4 px-10 rounded-lg text-white '>Get Started</button>
                    </div>
                </div>
                <div className="relative z-10 text-white left-10" >
                    <Slider />
                </div>
                <div className="lg:col-span-2 md:col-span-2 col-span-1 z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                <div className="bg-teal-800 flex justify-center items-center gap-4 px-3 py-6 text-white">
                    <div className='text-3xl text-teal-800 bg-white p-3 rounded-2xl'><FaUsers/> </div>
                    <div>
                        <p className='text-xl'> Happy Clients </p>
                        <p className='text-2xl font-bold flex'><Counter increment={1}  targetNumber={230.2} /> k</p>
                    </div>
                    
                </div>
                <div className="bg-teal-400 flex justify-center items-center gap-4 px-3 py-6 text-black">
                    <div className='text-3xl text-white bg-teal-800 p-3 rounded-2xl'><FaClock/> </div>
                    <div>
                        <p className='text-xl'> Hours of Counselling </p>
                        <p className='text-2xl font-bold flex'><Counter increment={2} targetNumber={156} />K hours</p>
                    </div>
                    
                </div>
                <div className="bg-teal-800 flex justify-center items-center gap-4 px-3 py-6 text-white">
                    <div className='text-3xl text-teal-800 bg-white p-3 rounded-2xl'><FaLaptop/> </div>
                    <div>
                        <p className='text-xl'> Tests Taken </p>
                        <div className='text-2xl font-bold flex'><Counter increment={1} targetNumber={723} /></div>
                    </div>
                    
                </div>
            </div>
                </div>
            </div>
            
        </div>
    );
};

export default Hero;