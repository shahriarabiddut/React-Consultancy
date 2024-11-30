import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import GetInTouch from '../components/Home/GetInTouch';
import Services from '../components/Home/Services';
import Testimonial from '../components/Home/Testimonial';
import WhyUs from '../components/Home/WhyUs';
import AuthLayout from '../layouts/AuthLayout';
import HomeLayout from '../layouts/HomeLayout';
import PageLayout from '../layouts/PageLayout';
import UserLayout from '../layouts/UserLayout';
import ChangePassword from '../pages/ChangePassword';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import Resources from '../pages/Resources';
import ServiceFull from '../pages/ServiceFull';
import UpdateProfile from '../pages/UpdateProfile';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout> ,
    },{
        path:'/auth',
        element: <AuthLayout/>,
        children:[
            {
                path:'/auth/login',
                element: <Login/>
            },{
                path:'/auth/register',
                element: <Register/>
            },{
                path:'/auth/changePassword',
                element: <ChangePassword/>
            },

        ]
    },
    {
        path:'*',
        element: <ErrorPage/>
    },{
        path:'/service/:id',
        element: <PrivateRoute> <ServiceFull></ServiceFull> </PrivateRoute>,
        loader: async ({ params }) => {
            const response = await fetch('/data/services.json');
            const services = await response.json();
            const service = services.find(item => item.id === parseInt(params.id));
            if (!service) {
                throw new Response('Service Not Found', { status: 404 });
            }
            return service;
        },
        errorElement: <ErrorPage/>
    },{
        path:'/profile',
        element: <PrivateRoute><UserLayout/></PrivateRoute>,
        children:[
            {
                path:'',
                element:  <Profile/>
            },{
                path:'/profile/update',
                element: <UpdateProfile/>
            },

        ]
    },{
        path:'/page',
        element: <PageLayout/>,
        children:[
            {
                path:'/page/services',
                element:  <Services/>
            },{
                path:'/page/about',
                element:  <WhyUs/>
            },{
                path:'/page/contact',
                element:  <GetInTouch/>
            },
            {
                path:'/page/testimonial',
                element:  <Testimonial/>,
                loader: () =>{
                    return fetch('/data/testimonial.json');
                },
                errorElement: <ErrorPage/>
            },{
                path:'/page/resources',
                element:  <Resources/>
            },

        ]
    },
])

export default router;