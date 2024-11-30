import React, { useEffect, useState } from 'react';
import PageSlogan from '../PageSlogan';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('/data/services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);
    return (
        <section className='mx-auto w-11/12'>
            <div className=" min-h-screen my-10 ">
                <PageSlogan title={'OUR SERVICES'} slogan={'Empower Your Career Journey for Greater Success'}></PageSlogan>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
                </div>
            </div>
        </section>
    );
};

export default Services;