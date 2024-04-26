import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';
import { IoHomeOutline } from 'react-icons/io5';
import { LuContact } from 'react-icons/lu';
import { MdOutlineDesignServices } from 'react-icons/md';
import { GoTasklist } from 'react-icons/go';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

const Navbar = () => {

    const navOptions = <>
        <li>
            <CustomLink to='/'>
                <IoHomeOutline className='text-lg lg:hidden' /> Home
            </CustomLink>
        </li>
        <li>
            <CustomLink to='/services'>
                <MdOutlineDesignServices className='text-lg lg:hidden' /> Services
            </CustomLink>
        </li>
        <li>
            <CustomLink to='/projects'>
                <AiOutlineFundProjectionScreen className='text-lg lg:hidden' /> Projects
            </CustomLink>
        </li>
        <li>
            <CustomLink to='/skills'>
                <GoTasklist className='text-lg lg:hidden' /> Skills
            </CustomLink>
        </li>
        <li>
            <CustomLink to='/contact'>
                <LuContact className='text-lg lg:hidden' /> Contact Us
            </CustomLink>
        </li>
    </>

    return (
        <div className='bg-white text-secondary py-1 px-2 lg:px-0'>
            <div className="navbar container mx-auto max-w-screen-xl">
                <div className="navbar-start">
                    <Link to="/">
                        <h2 className='text-primary text-lg font-medium'>MD. AZIM UDDIN</h2>
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex items-center">
                    <ul className="flex items-center menu menu-horizontal p-0 text-white">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end lg:hidden">
                    <div className="dropdown">
                        <label htmlFor='' tabIndex="0" className="btn btn-secondary btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul
                            tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-5 shadow w-72 right-6 bg-white rounded-xl"
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