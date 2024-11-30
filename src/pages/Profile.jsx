import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { FaEdit } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Profile = () => {
    const{user} = useContext(AuthContext);
    return (
        <div>
            <Helmet>
                <title>Profile | PHConsultancy</title>
            </Helmet>
            <section className='mx-auto w-11/12'>
            <div className=" min-h-screen my-10 ">
            <div className='lg:w-6/12 md:w-8/12 w-full mx-auto grid gap-4 mb-4'>
                <h2 className='text-teal-800 text-center text-2xl font-semibold'>Profile</h2>
                <progress className="progress w-56 mx-auto bg-teal-400"></progress>
            </div>
            <div className="card shadow-lg bg-teal-100">
                <figure className="px-10 pt-10">
                <img
                    src={user.photoURL}
                    alt={`Profile pic of ${user.displayName}`}
                    className="rounded-full w-32 h-32"
                />
                </figure>
                <div className="card-body text-center">
                <h2 className="font-bold text-2xl text-center">{user.displayName}</h2>
                <p className="text-teal-600">{user.email}</p>
                <p className="text-justify text-gray-500">"Static Bio && Passionate about transforming ideas into reality through code, I am a full-stack developer dedicated to building innovative, user-centric solutions. With a strong foundation in modern web technologies and a love for problem-solving, I strive to create seamless digital experiences. My mantra, 'Coding the future, one line at a time,' reflects my commitment to learning, growing, and contributing to the tech community while staying ahead in the ever-evolving world of software development."</p>
                <div className="card-actions justify-center mt-4">
                    <NavLink to={'/profile/update'} >
                    <button className="bg-teal-700 text-white p-3 font-semibold font-montserrat cursor-pointer hover:bg-white hover:border hover:border-gray-400 hover:text-teal-900 rounded-lg flex gap-2 items-center"> <FaEdit/>
                    Edit Profile </button></NavLink>
                </div>
                </div>
            </div>
            </div>
        </section>
        </div>
    );
};

export default Profile;