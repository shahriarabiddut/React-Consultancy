
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Used Components as page! SO this was necessary to avoid reuse or copy pasting same codes in multiple pages
export const helmetCopy = ()=>{
    const location = useLocation();
    const path = location.pathname;
    useEffect(()=>{
        // switch(path){
        //     case '/page/services' : document.title = 'SERVICES | PHConsultancy';
        //     case '/page/testimonial' : document.title = 'TESTIMONIALS | PHConsultancy';
        //     case '/page/about' : document.title = 'ABOUT US | PHConsultancy';
        //     case '/page/contact' : document.title = 'CONTACT US | PHConsultancy';
        // }
        if(path=='/page/services') document.title = 'SERVICES | PHConsultancy';
        else if(path=='/page/testimonial') document.title = 'TESTIMONIALS | PHConsultancy';
        else if(path=='/page/about') document.title = 'ABOUT US | PHConsultancy';
        else if(path=='/page/contact') document.title = 'CONTACT US | PHConsultancy';
    },[location])
    // console.log('running');
}
