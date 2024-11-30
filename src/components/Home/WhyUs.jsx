import React, { useContext } from 'react';
import tuto from '../../assets/whyus/tuto.avif';
import whyus1 from '../../assets/whyus/whyus1.webp';
import whyus2 from '../../assets/whyus/whyus2.webp';
import whyus3 from '../../assets/whyus/whyus3.webp';
import whyus4 from '../../assets/whyus/whyus4.webp';
import whyus5 from '../../assets/whyus/whyus5.webp';
import { AuthContext } from '../../provider/AuthProvider';
import PageSlogan from '../PageSlogan';
import WHyUsCard from '../WHyUsCard';
const WhyUs = () => {
    const {showToast} = useContext(AuthContext)
    const data = [
        {
          "id": 1,
          "title": "15 Years & Going",
          "description": "Unwavering commitment on guiding individuals towards successful and fulfilling career paths."
        },
        {
          "id": 2,
          "title": "International Assessments",
          "description": "Offering exceptional career guidance through our specialized Psychometric Assessments."
        },
        {
          "id": 3,
          "title": "Experienced Counsellors",
          "description": "Experts dedicated to helping you navigate your career path with confidence and clarity."
        },
        {
          "id": 4,
          "title": "Personalized 1:1 Approach",
          "description": "One-size-fits-all approach doesn't work when it comes to choosing ideal career paths."
        },
        {
          "id": 5,
          "title": "Clients from Across the Globe",
          "description": "Preferred choice for everyone as our results are internationally valid across the globe."
        }
      ]
      
    return (
        <section className='bg-teal-50' >
        <div className="min-h-screen py-12 mx-auto w-11/12">
            <PageSlogan title={'WHAT SETS US APART'} slogan={'Discover the PHConsultancy Difference'}></PageSlogan>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div><WHyUsCard name={'15 Years & Going'} description={'Unwavering commitment on guiding individuals towards successful and fulfilling career paths.'} image={whyus1} textAlign={'text-right'}></WHyUsCard></div>
                <div className='lg:hidden md:hidden flex'><WHyUsCard name={'International Assessments'} description={'Offering exceptional career guidance through our specialized Psychometric Assessments.'} image={whyus2} textAlign={'text-left'}></WHyUsCard></div>
                <div className='row-span-1 lg:row-span-2 md:row-span-2 flex items-center'>
                    <img src={tuto} className='h-auto cursor-pointer' onClick={()=>showToast('I will not play the Video! Sorry!','info')} alt="" />
                </div>

                <div className='lg:flex md:flex hidden '><WHyUsCard name={'International Assessments'} description={'Offering exceptional career guidance through our specialized Psychometric Assessments.'} image={whyus2} textAlign={'text-left'}></WHyUsCard></div>
                <div className='right'><WHyUsCard name={data[2].title} description={data[2].description} image={whyus3} textAlign={'text-right'}></WHyUsCard></div>
                <div className='left'><WHyUsCard name={data[3].title} description={data[3].description} image={whyus4} textAlign={'text-left'}></WHyUsCard></div>
                <div className='dashed '></div>
                <div className='centerbottom'><WHyUsCard name={data[4].title} description={data[4].description} image={whyus5} textAlign={'text-center'}></WHyUsCard></div>
            </div>
        </div>
        </section>
    );
};

export default WhyUs;