import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import azimImg from '../../../assets/images/azim_uddin.jpeg';

const RESUME_URL =
    'https://docs.google.com/document/d/1r86U0EQGsyzWUA6pibKo8rWuNuYQXYBws8ellV_B72A/edit?tab=t.0#heading=h.w1au8dqm7yb1';

const WHATSAPP_NUMBER = '8801883061967';
const WHATSAPP_MESSAGE = "Hi Azim, I visited your portfolio and I'd like to talk with you.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/azimuddin2', Icon: FaGithub },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/md-azim-uddin-232284241', Icon: FaLinkedinIn },
    { label: 'WhatsApp', href: WHATSAPP_URL, Icon: FaWhatsapp },
];

const Banner = () => {
    return (
        <section className="max-w-screen-xl lg:mx-auto mx-5 my-6 lg:my-12">
            <div className="hero-content p-0 flex-col lg:flex-row-reverse gap-8 lg:gap-12">
                {/* Profile image */}
                <div className="flex-1 mx-auto">
                    <img
                        src={azimImg}
                        alt="Portrait of Azim Uddin"
                        width={480}
                        height={480}
                        fetchpriority="high"
                        style={{ border: '3px solid #14a800' }}
                        className="w-5/6 lg:w-3/5 aspect-square object-cover rounded-full mx-auto"
                    />
                </div>

                {/* Intro */}
                <div className="flex-1 mt-4 lg:mt-0">
                    <h1 className="text-4xl lg:text-5xl text-secondary font-semibold mb-2 lg:mb-4">
                        Hi, I&apos;m Azim Uddin.
                    </h1>

                    <p className="text-3xl lg:text-4xl font-semibold text-primary min-h-[2.5rem] lg:min-h-[3rem]">
                        <TypeAnimation
                            sequence={[
                                'Full Stack Developer',
                                1500,
                                'Software Developer',
                                1500,
                            ]}
                            speed={30}
                            repeat={Infinity}
                            aria-label="Full Stack Developer"
                        />
                    </p>

                    <p className="mt-4 text-accent text-base lg:w-11/12 leading-relaxed mb-5">
                        Full Stack Developer with 2+ years of experience building complete
                        applications, from responsive user interfaces to secure APIs and database
                        design. I work with React.js, Next.js, Node.js, Express.js, TypeScript,
                        MongoDB, and PostgreSQL. I focus on clean, maintainable code and on delivering reliable products
                        from idea to deployment.
                    </p>
              

                    <div className="flex items-center justify-between lg:justify-start lg:gap-10">
                        <a
                            href={RESUME_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary text-white h-10 min-h-0"
                        >
                            <span>View Resume</span>
                            <FaArrowUpRightFromSquare className="text-sm ms-1" aria-hidden="true" />
                        </a>

                        <ul className="flex items-center gap-2">
                            {socialLinks.map(({ label, href, Icon }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Azim Uddin on ${label}`}
                                        title={label}
                                        className="btn btn-circle btn-outline btn-primary btn-sm rounded preview-btn"
                                    >
                                        <Icon className="text-base" aria-hidden="true" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;