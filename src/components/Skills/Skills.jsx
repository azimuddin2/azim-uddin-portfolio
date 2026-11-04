import {
    SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiRedux, SiReactrouter,
    SiHtml5, SiCss, SiSass, SiTailwindcss, SiBootstrap, SiMui, SiAntdesign, SiShadcnui,
    SiNodedotjs, SiExpress, SiNestjs, SiJsonwebtokens, SiSocketdotio,
    SiMongodb, SiMongoose, SiPostgresql, SiMysql, SiPrisma, SiDrizzle, SiRedis,
    SiDocker, SiNginx, SiGithubactions,
    SiGit, SiGithub, SiPostman, SiFigma, SiFirebase, SiNetlify, SiVercel,
} from 'react-icons/si';
import { TbApi, TbBrandAws, TbGitMerge } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import { FaDatabase, FaServer } from 'react-icons/fa6';

const skillGroups = [
    {
        title: 'Languages',
        note: 'Core programming languages',
        skills: [
            { name: 'JavaScript', Icon: SiJavascript, color: '#EAB308' },
            { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
        ],
    },
    {
        title: 'Frontend',
        note: 'User interfaces and styling',
        skills: [
            { name: 'React.js', Icon: SiReact, color: '#61DAFB' },
            { name: 'React Native', Icon: SiReact, color: '#61DAFB' },
            { name: 'Next.js', Icon: SiNextdotjs },
            { name: 'Redux', Icon: SiRedux, color: '#764ABC' },
            { name: 'React Router', Icon: SiReactrouter, color: '#CA4245' },
            { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
            { name: 'CSS3', Icon: SiCss, color: '#1572B6' },
            { name: 'SCSS', Icon: SiSass, color: '#CC6699' },
            { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
            { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3' },
            { name: 'Material UI', Icon: SiMui, color: '#007FFF' },
            { name: 'Ant Design', Icon: SiAntdesign, color: '#0170FE' },
            { name: 'shadcn/ui', Icon: SiShadcnui },
        ],
    },
    {
        title: 'Backend',
        note: 'APIs, authentication and real-time',
        skills: [
            { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
            { name: 'Express.js', Icon: SiExpress },
            { name: 'NestJS', Icon: SiNestjs, color: '#E0234E' },
            { name: 'REST API', Icon: TbApi, color: '#14a800' },
            { name: 'JWT Authentication', Icon: SiJsonwebtokens },
            { name: 'Socket.io', Icon: SiSocketdotio },
        ],
    },
    {
        title: 'Databases',
        note: 'Storage, queries and caching',
        skills: [
            { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
            { name: 'Mongoose', Icon: SiMongoose, color: '#CC3D3D' },
            { name: 'SQL', Icon: SiMysql, color: '#4479A1' },
            { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
            { name: 'Prisma', Icon: SiPrisma },
            { name: 'Drizzle ORM', Icon: SiDrizzle, color: '#9BBF12' },
            { name: 'Redis', Icon: SiRedis, color: '#DC382D' },
            { name: 'Vector Database', Icon: FaDatabase, color: '#7C3AED' },
        ],
    },
    {
        title: 'DevOps & Deployment',
        note: 'Containers, servers and automated releases',
        skills: [
            { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
            { name: 'Multi-container Applications', Icon: SiDocker, color: '#2496ED' },
            { name: 'Nginx', Icon: SiNginx, color: '#009639' },
            { name: 'AWS', Icon: TbBrandAws, color: '#FF9900' },
            { name: 'VPS', Icon: FaServer, color: '#F59E0B' },
            { name: 'GitHub Actions', Icon: SiGithubactions, color: '#2088FF' },
            { name: 'CI/CD', Icon: TbGitMerge, color: '#2088FF' },
        ],
    },
    {
        title: 'Tools & Platforms',
        note: 'Daily workflow and hosting',
        skills: [
            { name: 'Git', Icon: SiGit, color: '#F05032' },
            { name: 'GitHub', Icon: SiGithub },
            { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
            { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
            { name: 'VS Code', Icon: VscVscode, color: '#007ACC' },
            { name: 'Firebase', Icon: SiFirebase, color: '#FFA000' },
            { name: 'Netlify', Icon: SiNetlify, color: '#00C7B7' },
            { name: 'Vercel', Icon: SiVercel },
        ],
    },
];

const Skill = ({ name, Icon, color }) => (
    <li className="inline-flex items-center gap-2 rounded-full border border-info bg-success py-1.5 pl-2.5 pr-3.5 text-sm font-medium text-secondary transition-colors hover:border-primary">
        <Icon
            size={18}
            aria-hidden="true"
            className={color ? undefined : 'text-secondary'}
            style={color ? { color } : undefined}
        />
        <span>{name}</span>
    </li>
);

const Skills = () => {
    return (
        <section className="max-w-screen-xl lg:mx-auto mx-5 my-6 lg:my-12">
            <div className="text-center">
                <h2 className="text-lg lg:text-xl text-primary font-medium">My Skills</h2>
                <h1 className="text-2xl lg:text-3xl font-medium text-secondary">
                    Technology Skills &amp; Tools
                </h1>
                <p className="mt-3 mx-auto max-w-2xl text-base text-accent">
                    The languages, frameworks and tools I use to design, build and ship full stack
                    applications.
                </p>
            </div>

            <div className="mx-auto mt-8 lg:mt-10 max-w-4xl">
                <ol>
                    {skillGroups.map(({ title, note, skills }, index) => (
                        <li key={title} className="relative pl-10 pb-10 last:pb-0 lg:pl-14">
                            {index < skillGroups.length - 1 && (
                                <span
                                    aria-hidden="true"
                                    className="absolute left-[11px] top-7 -bottom-1 w-px bg-info"
                                />
                            )}
                            <span
                                aria-hidden="true"
                                className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-neutral"
                            >
                                <span className="h-2 w-2 rounded-full bg-primary" />
                            </span>

                            <div className="grid gap-3 lg:grid-cols-[13rem_1fr] lg:gap-8">
                                <div>
                                    <h3 className="text-lg font-semibold leading-7 text-secondary">{title}</h3>
                                    <p className="text-sm text-accent">{note}</p>
                                </div>
                                <ul className="flex flex-wrap gap-2.5 content-start" aria-label={`${title} skills`}>
                                    {skills.map((skill) => (
                                        <Skill key={skill.name} {...skill} />
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Skills;
