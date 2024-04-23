import { TypeAnimation } from 'react-type-animation';
import azimImg from '../../../assets/images/azim_uddin.jpeg';

const Banner = () => {
    return (
        <section>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1 mx-auto'>
                        <img style={{ border: '3px solid #14a800' }} src={azimImg} alt='azim uddin' className="lg:max-w-sm rounded-xl mx-auto" />
                    </div>
                    <div className='flex-1'>
                        <h1 className="text-5xl font-semibold mb-5">Hi! I'm Azim Uddin.</h1>

                        <TypeAnimation
                            className="text-2xl lg:text-4xl font-semibold text-primary"
                            sequence={[
                                'Full Stack Web Developer',
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

                        <p className="py-6">Hello Guys! I am a Full Stack web developer. I have 4+ years of experience in web programming. My Technical Skills:- HTML, CSS,  SCSS, Bootstrap, Tailwind CSS,  Javascript, ES6, React.js, Firebase, Node.js, Express.js, MongoDB Etc.</p>
                        <button className="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;