import { FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa';
import { SiFiverr, SiUpwork } from 'react-icons/si';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

const Footer = () => {
    return (
        <footer className="pt-12 lg:pt-20 px-6 lg:px-0 mt-12 lg:mt-16 bg-warning">
            <div className='footer max-w-screen-xl lg:mx-auto pb-8 border-b border-info'>
                <div>
                    <h2 className='text-primary font-semibold text-lg'>AU Software Agency</h2>
                    <p className='my-3 text-accent text-sm'>Hello Guys! I am a Full Stack web <br /> developer. I have 4+ years of <br /> experience in web programming.</p>
                    <Link to="/projects" className='group'>
                        <button className='btn btn-primary text-white capitalize'>All Projects</button>
                    </Link>
                    <ul className='flex items-center mt-5'>
                        <li>
                            <Link
                                target={"_blank"}
                                to={'https://www.facebook.com/au.pranto.5'}
                                className='btn btn-circle btn-outline btn-primary btn-sm rounded mr-2 preview-btn'
                            >
                                <FaFacebookF className='text-base' />
                            </Link>
                        </li>
                        <li>
                            <Link
                                target={"_blank"}
                                to={'https://www.linkedin.com/in/mohammad-azim-uddin-232284241'}
                                className='btn btn-circle btn-outline btn-primary btn-sm rounded mr-2 preview-btn'
                            >
                                <FaLinkedinIn className='text-base' />
                            </Link>
                        </li>
                        <li>
                            <Link
                                target={"_blank"}
                                to={'https://www.upwork.com/freelancers/~0199b09bb254ec0732'}
                                className='btn btn-outline btn-circle btn-primary btn-sm rounded mr-2 preview-btn'
                            >
                                <SiUpwork className='text-base' />
                            </Link>
                        </li>
                        <li>
                            <Link
                                target={"_blank"}
                                to={'https://www.fiverr.com/azimuddin2?up_rollout=true'}
                                className='btn btn-outline btn-circle btn-primary btn-sm rounded mr-3 preview-btn'
                            >
                                <SiFiverr className='text-xl' />
                            </Link>
                        </li>
                        <li>
                            <Link
                                target={"_blank"}
                                to={'https://github.com/azimuddin2'}
                                className='btn btn-outline btn-circle btn-primary btn-sm rounded preview-btn'
                            >
                                <FaGithub className='text-base' />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <span className=" text-secondary font-bold text-lg mb-2">Quick Links</span>
                    <Link to="/services" className="link link-hover text-accent font-medium link-primary">Services</Link>
                    <Link to="/projects" className="link link-hover text-accent font-medium link-primary">Projects</Link>
                    <Link to="/skills" className="link link-hover text-accent font-medium link-primary">Skills</Link>
                    <Link to="/contact" className="link link-hover text-accent font-medium link-primary">Contact Us</Link>
                </div>
                <div>
                    <span className="text-secondary font-bold text-lg mb-2">Software Agency Services</span>
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