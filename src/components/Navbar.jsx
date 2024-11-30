import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { helmetCopy } from './utility';

const Navbar = () => {
    // console.log('Console is giving error due to React Helmet');
    helmetCopy();
    const {user,logOut} = useContext(AuthContext);
    const links = (
                <>
                   <li className='hover:bg-teal-600 hover:text-white font-semibold'> <NavLink to={'/'}> Home</NavLink></li>
                   <li className='hover:bg-teal-600 hover:text-white font-semibold'> <NavLink to={'/page/services'}> Services</NavLink></li>
                   <li className='hover:bg-teal-600 hover:text-white font-semibold'> <NavLink to={'/page/testimonial'}> Testimonials</NavLink></li>
                   <li className='hover:bg-teal-600 hover:text-white font-semibold'> <NavLink to={'/page/resources'}> Resources</NavLink></li>
                   <li className='hover:bg-teal-600 hover:text-white font-semibold'> <NavLink to={'/page/about'}> About Us</NavLink></li>
                   <li className='hover:bg-teal-600 hover:text-white font-semibold'> <NavLink to={'/page/contact'}> Contact Us</NavLink></li>
                </>
                )
                
    return (
        <section className="navbar ">
            
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 gap-1 p-2 shadow">
                    {links}
                </ul>
                </div>
                <Link to={'/'} className="text-2xl text-teal-900 font-montserrat font-semibold">PHConsultancy.</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1">
                {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="hidden md:hidden lg:flex">
                {
                    user ? <>
                    <div className="flex items-center gap-2"><img title={user?.displayName} src={user?.photoURL} alt="" className='w-10 h-10 rounded-lg border border-teal-600' />
                        <NavLink to={'/profile'} className="p-3 rounded-xl bg-teal-900 text-white hover:bg-white hover:border hover:border-gray-400 hover:text-teal-900 font-semibold" >Profile</NavLink>
                    <button className="btn btn-warning" onClick={logOut}>Logout</button>
                    </div>
                    </> : <NavLink to={'/auth/login'} className="py-2 px-3 rounded-xl bg-teal-900 text-white hover:bg-white hover:border hover:border-gray-400 hover:text-teal-900 font-semibold">Login</NavLink>
                }
                </div>
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                {
                    user ? <img title={user?.displayName} src={user?.photoURL} alt="" className='w-10 h-10 rounded-lg border border-teal-600' /> :
                    <NavLink to={'/auth/login'} className="py-2 px-3 rounded-xl bg-teal-900 text-white hover:bg-white hover:border hover:border-gray-400 hover:text-teal-900 font-semibold">Login</NavLink>
                
                    }
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 gap-1 p-2 shadow">
                    {
                    user ? <>
                    <li><NavLink to={'/profile'} className="p-3 rounded-xl bg-teal-900 text-white hover:bg-white hover:border hover:border-gray-400 hover:text-teal-900 font-semibold" >Profile</NavLink></li>
                        <li>
                    <button className="btn btn-warning" onClick={logOut}>Logout</button></li>
                    
                    
                    </> : <li><NavLink to={'/auth/login'} className="py-2 px-3 rounded-xl bg-teal-900 text-white hover:bg-white hover:border hover:border-gray-400 hover:text-teal-900 font-semibold">Login</NavLink></li>
                }
                </ul>
                </div>
            </div>
            </section>
    );
};

export default Navbar;