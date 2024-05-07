import html from '../../assets/skills/html.png';
import css from '../../assets/skills/css.png';
import scss from '../../assets/skills/scss.png';
import tailwindCss from '../../assets/skills/tailwind-css.png';
import bootstrap from '../../assets/skills/bootstrap.png';
import material from '../../assets/skills/material-ui.png';
import javascript from '../../assets/skills/javascript.png';
import react from '../../assets/skills/react.png';
import reactRouter from '../../assets/skills/react-router.png';
import firebase from '../../assets/skills/firebase.png';
import node from '../../assets/skills/node-js.png';
import express from '../../assets/skills/express-js.png';
import mongoDb from '../../assets/skills/mongoDB.png';
import mongoose from '../../assets/skills/mongoose.png';
import jwt from '../../assets/skills/jwt.png';
import vsCode from '../../assets/tools/vs-code.png';
import github from '../../assets/tools/github.png';
import figma from '../../assets/tools/figma.png';
import netlify from '../../assets/tools/netlify.png';
import vercel from '../../assets/tools/vercel.png';

const Skills = () => {
    return (
        <section className="max-w-screen-xl lg:mx-auto mx-5 my-6 lg:my-12">
            <div className="text-center">
                <h2 className="text-lg lg:text-xl text-primary font-medium">My Skills</h2>
                <h1 className="text-2xl lg:text-3xl font-medium text-secondary">Technical Skills & Tools</h1>
            </div>
            <div className='mt-8 hidden lg:flex align-items-center items-center justify-evenly'>
                <ul className="timeline timeline-vertical">
                    <li>
                        <div className="timeline-start timeline-box border-info bg-success">
                            <img src={html} alt="HTML" className='w-8' />
                            <span className='text-accent'>HTML</span>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-primary w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box border-info bg-success">
                            <img src={css} alt="CSS" className='w-8' />
                            <span className='text-accent'>CSS</span>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-start timeline-box border-info bg-success">
                            <img src={scss} alt="SCSS" className='w-8' />
                            <span className='text-accent'>SCSS</span>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box border-info bg-success">
                            <img src={tailwindCss} alt="Tailwind CSS" className='w-8' />
                            <span className='text-accent'>Tailwind CSS</span>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-start timeline-box border-info bg-success">
                            <img src={bootstrap} alt="Bootstrap" className='w-8' />
                            <span className='text-accent'>Bootstrap</span>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                    </li>
                </ul>
                <ul className="timeline timeline-vertical">
                    <li>
                        <div className="timeline-start timeline-box border-info bg-success">
                            <img src={material} alt="Material UI" className='w-8' />
                            <span className='text-accent'>Material UI</span>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-primary w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box border-info bg-success">
                            <img src={javascript} alt="JavaScript" className='w-8' />
                            <span className='text-accent'>JavaScript</span>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-start timeline-box border-info bg-success">
                            <img src={react} alt="React.js" className='w-8' />
                            <span className='text-accent'>React.js</span>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box border-info bg-success">
                            <img src={reactRouter} alt="React Router" className='w-8' />
                            <span className='text-accent'>React Router</span>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-start timeline-box border-info bg-success">
                            <img src={firebase} alt="Firebase" className='w-8' />
                            <span className='text-accent'>Firebase</span>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                    </li>
                </ul>
                <ul className="timeline timeline-vertical">
                    <li>
                        <div className="timeline-start timeline-box border-info bg-success">
                            <img src={node} alt="Node.js" className='w-8' />
                            <span className='text-accent'>Node.js</span>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-primary w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box border-info bg-success">
                            <img src={express} alt="Express.js" className='w-8' />
                            <span className='text-accent'>Express.js</span>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-start timeline-box border-info bg-success">
                            <img src={mongoDb} alt="MongoDB" className='w-8' />
                            <span className='text-accent'>MongoDB</span>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box border-info bg-success">
                            <img src={mongoose} alt="Mongoose" className='w-8' />
                            <span className='text-accent'>Mongoose</span>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-start timeline-box border-info bg-success">
                            <img src={jwt} alt="JWT" className='w-8' />
                            <span className='text-accent'>JWT</span>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                    </li>
                </ul>
                <ul className="timeline timeline-vertical">
                    <li>
                        <div className="timeline-start timeline-box border-info bg-success">
                            <img src={vsCode} alt="VS Code" className='w-8' />
                            <span className='text-accent'>VS Code</span>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-primary w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box border-info bg-success">
                            <img src={github} alt="Github" className='w-8' />
                            <span className='text-accent'>Github</span>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-start timeline-box border-info bg-success">
                            <img src={figma} alt="Figma" className='w-8' />
                            <span className='text-accent'>Figma</span>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box border-info bg-success">
                            <img src={netlify} alt="Netlify" className='w-8' />
                            <span className='text-accent'>Netlify</span>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-start timeline-box border-info bg-success">
                            <img src={vercel} alt="Vercel" className='w-8' />
                            <span className='text-accent'>Vercel</span>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                    </li>
                </ul>
            </div>

            <div className='lg:hidden mt-6'>
                <ul className="timeline timeline-vertical">
                    <li>
                        <div className="timeline-start timeline-box border-info bg-success">
                            <img src={html} alt="HTML" className='w-8' />
                            <span className='text-accent'>HTML</span>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box border-info bg-success">
                            <img src={css} alt="CSS" className='w-8' />
                            <span className='text-accent'>CSS</span>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-start timeline-box border-info bg-success">
                            <img src={scss} alt="SCSS" className='w-8' />
                            <span className='text-accent'>SCSS</span>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box border-info bg-success">
                            <img src={tailwindCss} alt="Tailwind CSS" className='w-8' />
                            <span className='text-accent'>Tailwind CSS</span>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-start timeline-box border-info bg-success">
                            <img src={bootstrap} alt="Bootstrap" className='w-8' />
                            <span className='text-accent'>Bootstrap</span>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box border-info bg-success">
                            <img src={material} alt="Material UI" className='w-8' />
                            <span className='text-accent'>Material UI</span>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-start timeline-box border-info bg-success">
                            <img src={javascript} alt="JavaScript" className='w-8' />
                            <span className='text-accent'>JavaScript</span>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box border-info bg-success">
                            <img src={react} alt="React.js" className='w-8' />
                            <span className='text-accent'>React.js</span>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-start timeline-box border-info bg-success">
                            <img src={reactRouter} alt="React Router" className='w-8' />
                            <span className='text-accent'>React Router</span>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box border-info bg-success">
                            <img src={firebase} alt="Firebase" className='w-8' />
                            <span className='text-accent'>Firebase</span>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-start timeline-box border-info bg-success">
                            <img src={node} alt="Node.js" className='w-8' />
                            <span className='text-accent'>Node.js</span>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box border-info bg-success">
                            <img src={express} alt="Express.js" className='w-8' />
                            <span className='text-accent'>Express.js</span>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-start timeline-box border-info bg-success">
                            <img src={mongoDb} alt="MongoDB" className='w-8' />
                            <span className='text-accent'>MongoDB</span>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box border-info bg-success">
                            <img src={mongoose} alt="Mongoose" className='w-8' />
                            <span className='text-accent'>Mongoose</span>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-start timeline-box border-info bg-success">
                            <img src={jwt} alt="JWT" className='w-8' />
                            <span className='text-accent'>JWT</span>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box border-info bg-success">
                            <img src={vsCode} alt="VS Code" className='w-8' />
                            <span className='text-accent'>VS Code</span>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-start timeline-box border-info bg-success">
                            <img src={github} alt="Github" className='w-8' />
                            <span className='text-accent'>Github</span>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box border-info bg-success">
                            <img src={figma} alt="Figma" className='w-8' />
                            <span className='text-accent'>Figma</span>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-start timeline-box border-info bg-success">
                            <img src={netlify} alt="Netlify" className='w-8' />
                            <span className='text-accent'>Netlify</span>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <hr className='bg-info' />
                    </li>
                    <li>
                        <hr className='bg-info' />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box border-info bg-success">
                            <img src={vercel} alt="Vercel" className='w-8' />
                            <span className='text-accent'>Vercel</span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Skills;