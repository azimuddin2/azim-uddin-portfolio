import sparktechLogo from '../../../assets/images/sparktech.jpg';
import programmingHeroLogo from '../../../assets/images/programming-hero.png';

const experiences = [
    {
        role: 'Full Stack Developer',
        company: 'Sparktech Agency',
        logo: sparktechLogo,
        period: 'Jul 2025 – Present',
        current: true,
        stats: [
            { value: '10+', label: 'Client projects delivered' },
            { value: '40%', label: 'Faster page load time' },
            { value: '1,000+', label: 'Users on real-time chat' },
        ],
        points: [
            'Built full stack apps with React, Next.js, Node.js, Express, and MongoDB/PostgreSQL, with JWT-secured REST APIs.',
            'Delivered 10+ client projects from design to deployment on AWS using Docker and CI/CD.',
            'Improved page load time by 40% by optimizing React components and API queries.',
            'Built a real-time chat feature (Socket.IO) used by 1,000+ users.',
        ],
    },
    {
        role: 'Web Developer & Instructor',
        company: 'Programming Hero',
        logo: programmingHeroLogo,
        period: 'Jan 2025 – Jun 2025',
        points: [
            'Worked as a full stack developer on web development tasks using React, Node.js, Express, and MongoDB.',
        ],
    },
];

const Experience = () => {
    return (
        <section className="max-w-screen-xl lg:mx-auto mx-5 my-12 mb-6 lg:mb-0">
            <div className="text-left">
                <h2 className="text-lg lg:text-xl text-primary font-medium">Job Experience</h2>
                <h1 className="text-2xl lg:text-3xl font-medium text-secondary">
                    Where I&apos;ve Worked
                </h1>
            </div>

            <ol className="mt-8 lg:mt-10">
                {experiences.map(({ role, company, logo, period, current, stats, points }, index) => (
                    <li key={`${company}-${period}`} className="relative pl-10 pb-8 last:pb-0 lg:pl-14">
                        {index < experiences.length - 1 && (
                            <span
                                aria-hidden="true"
                                className="absolute left-[11px] top-11 -bottom-5 w-px bg-info"
                            />
                        )}
                        <span
                            aria-hidden="true"
                            className="absolute left-0 top-5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-neutral"
                        >
                            <span className="h-2 w-2 rounded-full bg-primary" />
                        </span>

                        <article className="rounded-xl border border-info bg-success p-5 transition-colors hover:border-primary lg:p-8">
                            {/* Header */}
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                <div className="flex items-center gap-4">
                                    {logo ? (
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-info">
                                            <img
                                                src={logo}
                                                alt={`${company} logo`}
                                                className="h-full w-full object-contain"
                                            />
                                        </div>
                                    ) : (
                                        <div
                                            aria-hidden="true"
                                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-warning text-xl font-semibold text-primary"
                                        >
                                            {company.charAt(0)}
                                        </div>
                                    )}
                                    <div>
                                        <h3 className="text-lg font-semibold leading-6 text-secondary">{role}</h3>
                                        <p className="font-medium text-primary">{company}</p>
                                    </div>
                                </div>

                                <p className="flex items-center gap-2 text-sm text-accent sm:pt-1">
                                    <span>{period}</span>
                                    {current && (
                                        <span className="rounded-full border border-primary px-2 py-0.5 text-xs font-medium text-primary">
                                            Current
                                        </span>
                                    )}
                                </p>
                            </div>

                            {/* Key numbers */}
                            {stats && (
                                <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                                    {stats.map(({ value, label }) => (
                                        <li key={label} className="rounded-lg bg-warning px-4 py-3">
                                            <span className="block text-2xl font-semibold text-primary">{value}</span>
                                            <span className="block text-sm text-accent">{label}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Responsibilities */}
                            <ul className={`space-y-2.5 ${stats ? 'mt-6 border-t border-info pt-6' : 'mt-6'}`}>
                                {points.map((point) => (
                                    <li key={point} className="flex gap-3 text-base leading-relaxed text-accent">
                                        <span
                                            aria-hidden="true"
                                            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                                        />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default Experience;