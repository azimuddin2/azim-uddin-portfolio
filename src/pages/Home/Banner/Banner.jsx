import { TypeAnimation } from 'react-type-animation';
import azimImg from '../../../assets/images/azim_uddin.jpeg';
import { Link } from 'react-router-dom';
import { FaLinkSlash } from 'react-icons/fa6';

const Banner = () => {
    return (
        <section>
            <div className="my-5 lg:my-12">
                <div className="hero-content p-0 flex-col lg:flex-row-reverse">

                    <div className='flex-1 mx-auto'>
                        <img style={{ border: '3px solid #14a800' }} src={azimImg} alt='azim uddin' className="w-4/5 lg:w-3/5 rounded-xl mx-auto" />
                    </div>

                    <div className='flex-1 mt-5 lg:mt-0'>
                        <h1 className="text-4xl lg:text-5xl text-secondary font-semibold mb-2 lg:mb-5">Hi! I'm Azim Uddin.</h1>

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

                        <p className="my-4 lg:my-5 text-accent text-base w-11/12">Hello Guys! I am a Full Stack web developer. I have 4+ years of experience in web programming. My Technical Skills:- HTML, CSS, SCSS, Tailwind CSS, Bootstrap, Material UI, JavaScript, ES6, React.js, React Router, Firebase, Node.js, Express.js, MongoDB Etc.</p>
                        <Link target={"_blank"} to={'https://drive.google.com/file/d/1WIl8nPiFzrquIXAbsvoFtgaoTTV38Twx/view?usp=sharing'}>
                            <button className="btn btn-primary text-white flex items-center">
                                <span>Get Resume</span>
                                <FaLinkSlash className='text-lg' />
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;