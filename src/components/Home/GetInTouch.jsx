import React, { useContext } from 'react';
import { FaClock, FaPhoneAlt } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';

const GetInTouch = () => {
    const {showToast} = useContext(AuthContext);
    const handleSubmit = (e)=>{
        e.preventDefault();
        showToast('We will contact you Soon!','')
        e.target.reset();
    }
    return (
        <section className='mx-auto w-10/12'>
            <div className=" min-h-screen my-10 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className='px-2 flex flex-col gap-4'>
                    <h2 className='text-teal-800 text-center text-2xl font-semibold'>TALK TO OUR CAREER EXPERTS</h2>
                    <div className='flex justify-center'><progress className="progress w-2/3 bg-teal-400"></progress></div> 
                    <h2 className='text-teal-800 text-center text-5xl font-bold'>Please Feel Free to Contact Us</h2>
                    <div className="divider"></div>
                    <div className='flex gap-4 text-2xl font-semibold'><FaClock/> <span>Mon - Sun (9:00 AM to 8:00 PM)</span></div> 
                    <p className="text-justify text-gray-500">
                        We understand that making important career choices can be overwhelming and uncertain. The decisions you make today will shape your professional journey and have a lasting impact on your life. That's why we highly encourage individuals like you to talk to our experts before making any significant career decisions. Our team of experienced career counselors is here to provide you with the best career counselling and Guidance support you need to make informed choices that align with your aspirations and goals.
                    </p>
                    <div className='flex gap-4 font-semibold font-montserrat justify-start'>
                        <div className='text-2xl p-5 bg-teal-700 text-white rounded-xl'><FaPhoneAlt/> </div>
                        <div className='text-2xl space-y-1'><p>Call to ask any question</p> <p>+88 - 01861396965</p></div>
                    </div> 
                </div>
                <div className="px-2 grid items-center justify-center ">
                <form className="card-body shadow-lg rounded-lg bg-teal-700" onSubmit={handleSubmit}>
                    <h3 className="text-center w-5/6 text-2xl mx-auto text-white">Get in Touch With Our Career Experts!</h3>
                    <div className="form-control">
                    <input type="text" name='name' placeholder="Your Full Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <input type="text" name='mrinfo' placeholder="I am....." className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                    <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <input type="text" name='phone' placeholder="Your Phone Number" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <textarea name="message" rows={10} id="" defaultValue="Your Message"  className="p-1 input input-bordered" required></textarea>
                    </div>
                    <div className="form-control my-6">
                    <button type='submit' className="btn bg-teal-700 text-white font-semibold hover:text-teal-800 hover:font-bold hover:bg-white">Submit</button>
                    </div>
                </form>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;