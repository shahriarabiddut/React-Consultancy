import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {id,image,name,description} = service;
    return (
        <div className='flex'>
            <div className="card flex-1 bg-teal-100 shadow-xl">
                <figure className="px-10 pt-10 pb-5">
                <div className="relative p-3 flex items-center justify-center">
                    <div className="absolute inset-0 bg-teal-800 rotate-45 rounded-xl"></div>
                    <img className="relative z-10 h-12" src={image} alt={name} />
                </div>
                    
                </figure>
                <div className="card-body items-center text-center gap-4">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-justify'>{description.slice(0, 250)}.....</p>
                    <div className="card-actions">
                    <Link to={`/service/${id}`} className="bg-teal-700 text-white p-3 font-semibold font-montserrat cursor-pointer hover:bg-white hover:border hover:border-gray-400 hover:text-teal-900 rounded-lg flex gap-2 items-center">Explore <FaArrowRight/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;