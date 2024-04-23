import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';
import { IoHomeOutline } from 'react-icons/io5';
import { LuCalendarClock } from 'react-icons/lu';

const Navbar = () => {

    const navOptions = <>
        <li>
            <CustomLink to='/'>
                <IoHomeOutline className='text-lg lg:hidden' /> Home
            </CustomLink>
        </li>
        <li>
            <CustomLink to='/services'>
                <IoHomeOutline className='text-lg lg:hidden' /> Services
            </CustomLink>
        </li>
        <li>
            <CustomLink to='/projects'>
                <LuCalendarClock className='text-lg lg:hidden' /> Projects
            </CustomLink>
        </li>
        <li>
            <CustomLink to='/skills'>
                <LuCalendarClock className='text-lg lg:hidden' /> Skills
            </CustomLink>
        </li>
        <li>
            <CustomLink to='/skills'>
                <LuCalendarClock className='text-lg lg:hidden' /> Contact Us
            </CustomLink>
        </li>
    </>

    return (
        <div className='text-secondary py-1 px-2 lg:px-0'>
            <div className="navbar container mx-auto max-w-screen-xl">
                <div className="navbar-start">
                    <Link to="/">
                        <h2 className='text-primary text-lg font-medium'>MD. AZIMUDDIN</h2>
                        {/* <img className='w-full' style={{ height: "40px" }} src={logo} alt="Logo" /> */}
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex items-center">
                    <ul className="flex items-center menu menu-horizontal p-0 text-white">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end lg:hidden">
                    <div className="dropdown">
                        <label htmlFor='' tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul
                            tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-5 shadow  w-60 right-6 responsive-navbar"
                        >
                            {navOptions}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;