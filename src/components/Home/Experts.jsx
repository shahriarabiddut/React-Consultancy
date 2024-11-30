import React from 'react';
import instructorRathi from '../../assets/instructor/dr.rathi.webp';
import ExpertSlider from '../ExpertSlider';
import PageSlogan from '../PageSlogan';

const Experts = () => {
    
    return (
        <section className='bg-gray-50 '>
            <div className="min-h-screen py-12 mx-auto w-11/12">
             <PageSlogan title={'MEET OUR EXPERTS'} slogan={'World Class Brilliance Always At Your Reach'}></PageSlogan>
             
             <div className="flex flex-col md:flex-row lg:flex-row gap-5 my-4 justify-center">
                <div className='w-full lg:w-1/3 lg:p-4 md:w-1/3 md:p-4'>
                    <img src={instructorRathi} alt="instructor" className='' />
                </div>
                <div className='w-full lg:w-2/3 lg:px-4 md:w-2/3 md:px-4'>
                    <p className="text-justify text-gray-600 md:text-[16px] lg:text-[18px]">
                    We are a team of professionals with varied backgrounds such as psychology, merchandizing, technology, human resources, general management, manufacturing, and education. We are passionate about our work, your career, and the science behind it. We are uncompromising when it comes to taking a stand towards your short-term as well as long-term career. We are obsessed with your happiness by guiding you to engage with the right subjects and right work. We emphasize on holistic career guidance & Career Coaching i.e. end-to-end rather than piece meal. We educate you on critical success factors (CSFs) in a particular field of study or work.
                    <br />
                    <br />
                    Dr. Rathi comes with immense passion for people development with proven experience at IIT Bombay and Oracle Corporation as a placement officer and campus recruitment head (APAC) respectively. Has pursued an award winning Ph.D. from IIT Bombay. Conducted career guidance sessions, career coaching and training programs for more than 40,000 students and executives.
                    </p>
                    <button type='button' className="my-5 bg-teal-700 text-white p-3 font-semibold font-montserrat cursor-pointer hover:bg-white hover:border hover:border-gray-400 hover:text-teal-900 rounded-lg flex gap-2 items-center">Visit Profile </button>
                </div>
             </div>

            <div className="max-w-4xl mx-auto my-10">
                <h2 className="text-3xl font-bold text-center mb-6">Our Instructors</h2>
                <ExpertSlider/>
            </div>
            </div>
        </section>
    );
};

export default Experts;