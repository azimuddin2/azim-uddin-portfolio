import { TypeAnimation } from 'react-type-animation';
import azimImg from '../../../assets/images/azim_uddin.png';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkSlash, FaLinkedinIn } from 'react-icons/fa6';
import { SiUpwork } from 'react-icons/si';

const Banner = () => {
    return (
        <section className="max-w-screen-xl lg:mx-auto mx-5 my-6 lg:my-12">
            <div className="hero-content p-0 flex-col lg:flex-row-reverse">
                <div className='flex-1 mx-auto'>
                    <img
                        src={azimImg}
                        alt='azim uddin'
                        style={{ border: '3px solid #14a800' }}
                        className="w-5/6 lg:w-3/5 rounded-full mx-auto"
                    />
                </div>
                <div className='flex-1 mt-4 lg:mt-0'>
                    <h1 className="text-4xl lg:text-5xl text-secondary font-semibold mb-2 lg:mb-4">Hi! I'm Azim Uddin.</h1>
                    <TypeAnimation
                        className="text-3xl lg:text-4xl font-semibold text-primary"
                        sequence={[
                            'Full Stack Developer',
                            1000,
                            'MERN Stack Developer',
                            1000,
                            'Software Developer',
                            1000,
                            'Freelancer',
                            1000,
                        ]}
                        speed={20}
                        repeat={Infinity}
                    />
                    <p className="my-4 lg:my-5 text-accent text-base lg:w-11/12">Hello Guys! I am a Full Stack web developer. I have 4+ years of experience in web programming. My Technical Skills:- HTML, CSS, SCSS, Tailwind CSS, Bootstrap, Material UI, JavaScript, ES6, React.js, React Router, Firebase, Node.js, Express.js, MongoDB Etc.</p>
                    <div className='flex items-center justify-between lg:justify-normal'>
                        <button className="btn btn-primary text-white">
                            <Link
                                target={"_blank"}
                                to={'https://drive.google.com/file/d/1WIl8nPiFzrquIXAbsvoFtgaoTTV38Twx/view?usp=sharing'}
                                className='flex items-center'
                            >
                                <span>Get Resume</span>
                                <FaLinkSlash className='text-lg ms-1' />
                            </Link>
                        </button>
                        <ul className='flex justify-center items-center lg:ml-32'>
                            <li>
                                <Link
                                    target={"_blank"}
                                    to={'https://www.linkedin.com/in/mohammad-azim-uddin-232284241'}
                                    className='btn btn-circle btn-outline btn-primary btn-sm rounded mr-3 animate-bounce preview-btn'
                                >
                                    <FaLinkedinIn className='text-base' />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    target={"_blank"}
                                    to={'https://www.upwork.com/freelancers/~0199b09bb254ec0732'}
                                    className='btn btn-outline btn-circle btn-primary btn-sm rounded mr-3 animate-pulse preview-btn'
                                >
                                    <SiUpwork className='text-base' />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    target={"_blank"}
                                    to={'https://github.com/azimuddin2'}
                                    className='btn btn-outline btn-circle btn-primary btn-sm rounded animate-bounce preview-btn'
                                >
                                    <FaGithub className='text-base' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;