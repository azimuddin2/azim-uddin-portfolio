import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

const Footer = () => {
    return (
        <footer
            style={{ background: 'var(--Dark-07, #F3F3F3)' }}
            className="pt-20 px-6 lg:px-0"
        >
            <div className='footer max-w-screen-xl lg:mx-auto pb-8 border-b'>
                <div>
                    {/* <img src={logo} alt="Logo" style={{ height: "44px" }} /> */}
                    <p className='my-3 text-accent text-sm'>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial.</p>
                    <Link to="/projects" className='group'>
                        <button className='btn btn-outline btn-primary group-hover:text-white capitalize'>Projects</button>
                    </Link>
                    <div className='flex items-center mt-5'>
                        <p className='text-primary text-2xl mr-2 cursor-pointer'><FaGoogle></FaGoogle></p>
                        <p className='text-primary text-2xl mr-2 cursor-pointer'><FaTwitter></FaTwitter></p>
                        <p className='text-primary text-2xl mr-2 cursor-pointer'><FaInstagram></FaInstagram></p>
                        <p className='text-primary text-2xl cursor-pointer'><FaLinkedin></FaLinkedin></p>
                    </div>
                </div>
                <div>
                    <span className=" text-neutral font-bold text-lg mb-2">Quick Links</span>
                    <a href="/" className="link link-hover text-accent font-medium">About Us</a>
                    <a href="/" className="link link-hover text-accent font-medium">Service</a>
                    <a href="/" className="link link-hover text-accent font-medium">Doctors</a>
                    <a href="/" className="link link-hover text-accent font-medium">Departments</a>
                    <a href="/" className="link link-hover text-accent font-medium">Online Payment</a>
                    <a href="/" className="link link-hover text-accent font-medium">Contact Us</a>
                    <a href="/" className="link link-hover text-accent font-medium">My Account</a>
                </div>
                <div>
                    <span className="text-neutral font-bold text-lg mb-2">Doc House Services</span>
                    <a href="/" className="link link-hover text-accent font-medium">Pediatric Clinic</a>
                    <a href="/" className="link link-hover text-accent font-medium">Diagnosis Clinic</a>
                    <a href="/" className="link link-hover text-accent font-medium">Cardiac Clinic</a>
                    <a href="/" className="link link-hover text-accent font-medium">Laboratory Analysis</a>
                    <a href="/" className="link link-hover text-accent font-medium">Gynecological Clinic</a>
                    <a href="/" className="link link-hover text-accent font-medium">Personal Counseling</a>
                    <a href="/" className="link link-hover text-accent font-medium">Dental Clinic</a>
                </div>
                <div>
                    <span className="text-neutral font-bold text-lg mb-2">Working Hours</span>
                    <a href="/" className="link link-hover text-accent font-medium">Monday - 10 am to 7 pm</a>
                    <a href="/" className="link link-hover text-accent font-medium">Tuesday - 10 am to 7 pm</a>
                    <a href="/" className="link link-hover text-accent font-medium">Wednesday - 10 am to 7 pm</a>
                    <a href="/" className="link link-hover text-accent font-medium">Thursday - 10 am to 7 pm</a>
                    <a href="/" className="link link-hover text-accent font-medium">Friday - 10 am to 7 pm</a>
                    <a href="/" className="link link-hover text-accent font-medium">Saturday - 10 am to 7 pm</a>
                    <a href="/" className="link link-hover text-accent font-medium">Sunday - 10 am to 7 pm</a>
                </div>
            </div>
            <p className='text-center text-accent py-6'><small>Copyright © 2024 - AU Software Agency</small></p>
            <ScrollToTop
                smooth
                className="animate-bounce flex justify-center items-center"
                color="#fff"
                width="18"
                height="18"
                top="400"
                style={{ background: "#14a800", boxShadow: 'none', borderRadius: "5px" }}
            />
        </footer>
    );
};

export default Footer;