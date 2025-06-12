import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';
import { IoHomeOutline } from 'react-icons/io5';
import { LuContact } from 'react-icons/lu';
import { MdOutlineDarkMode, MdOutlineDesignServices, MdOutlineLightMode } from 'react-icons/md';
import { GoTasklist } from 'react-icons/go';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';

const Navbar = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        themeChange(false)
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html')?.setAttribute('data-theme', localTheme);
    }, [theme]);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    const navOptions = <>
        <li>
            <CustomLink to='/'>
                <IoHomeOutline className='text-lg lg:hidden' /> Home
            </CustomLink>
        </li>
        <li>
            <CustomLink to='/services'>
                <MdOutlineDesignServices className='text-lg lg:hidden' /> DevTrack
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
        <div className='py-1 px-2 lg:px-0'>
            <div className="navbar lg:p-0 container mx-auto max-w-screen-xl">
                <div className="navbar-start">
                    <Link to="/">
                        <h2 className='text-primary text-xl font-medium'>MD. AZIM UDDIN</h2>
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex items-center">
                    <ul className="flex items-center menu menu-horizontal p-0">
                        {navOptions}
                    </ul>
                    <label className="swap swap-rotate ms-3">
                        <input
                            type="checkbox"
                            onChange={handleToggle}
                            checked={theme === 'light' ? false : true}
                        />
                        <MdOutlineLightMode className="swap-on w-6 h-6 text-[#ffec99]" />
                        <MdOutlineDarkMode className="swap-off w-6 h-6 text-secondary" />
                    </label>
                </div>
                <div className="navbar-end lg:hidden">
                    <label className="swap swap-rotate me-1">
                        <input
                            type="checkbox"
                            onChange={handleToggle}
                            checked={theme === 'light' ? false : true}
                        />
                        <MdOutlineLightMode className="swap-on w-6 h-6 text-[#ffec99]" />
                        <MdOutlineDarkMode className="swap-off w-6 h-6 text-secondary" />
                    </label>
                    <div className="dropdown">
                        <label htmlFor='' tabIndex="0" className="btn btn-ghost lg:hidden text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul
                            tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-5 shadow w-72 right-6 bg-warning rounded-xl z-10"
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