import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

const Footer = () => {
    return (
        <footer
            style={{ background: 'var(--Dark-07, #F3F3F3)' }}
            className="pt-20 px-6 lg:px-0 mt-12 lg:mt-16"
        >
            <div className='footer max-w-screen-xl lg:mx-auto pb-8 border-b'>
                <div>
                    <h2 className='text-primary font-semibold text-lg'>AU Software Agency</h2>

                    <p className='my-3 text-accent text-sm'>Hello Guys! I am a Full Stack web <br /> developer. I have 4+ years of <br /> experience in web programming.</p>
                    <Link to="/projects" className='group'>
                        <button className='btn btn-outline btn-primary group-hover:text-white capitalize'>All Projects</button>
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
                    <Link to="/services" className="link link-hover text-accent font-medium link-primary">Services</Link>
                    <Link to="/projects" className="link link-hover text-accent font-medium link-primary">Projects</Link>
                    <Link to="/skills" className="link link-hover text-accent font-medium link-primary">Skills</Link>
                    <Link to="/contact" className="link link-hover text-accent font-medium link-primary">Contact Us</Link>
                </div>
                <div>
                    <span className="text-neutral font-bold text-lg mb-2">Software Agency Services</span>
                    <a href="/" className="link link-hover text-accent font-medium">Website Design</a>
                    <a href="/" className="link link-hover text-accent font-medium">Responsive Website</a>
                    <a href="/" className="link link-hover text-accent font-medium">Web Development</a>
                    <a href="/" className="link link-hover text-accent font-medium">Frontend Development</a>
                    <a href="/" className="link link-hover text-accent font-medium">Full Stack Development</a>
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