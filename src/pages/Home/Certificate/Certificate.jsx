import fpiCertificate from '../../../assets/certificate/FPI-Certificate.jpg';
import programmingHeroCertificate from '../../../assets/certificate/Programming-Hero-Certificate.jpg';
import utcCertificate from '../../../assets/certificate/UTC-Certificate.jpg';
import { HiOutlineViewfinderCircle } from 'react-icons/hi2';
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';

const Certificate = () => {
    return (
        <section className='my-8 lg:my-12'>
            <div className="text-center">
                <h2 className="text-lg lg:text-xl text-primary font-medium">My Certificate</h2>
                <h1 className="text-2xl lg:text-3xl font-medium text-secondary">Certificate Of Achievement</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 lg:mt-8'>
                <Slide direction='down'>
                    <Link
                        target={"_blank"}
                        to="https://drive.google.com/file/d/1WIl8nPiFzrquIXAbsvoFtgaoTTV38Twx/view?usp=sharing"
                        className="group/item hover:card hover:bg-base-100 image-full cursor-pointer relative"
                    >
                        <figure>
                            <img src={fpiCertificate} alt="FPI Certificate" className="rounded-xl" />
                        </figure>
                        <div className='card-body absolute top-0 bottom-0 flex justify-center items-center'>
                            <div className='group/edit invisible group-hover/item:visible'>
                                <HiOutlineViewfinderCircle className=' mx-auto text-4xl text-secondary' />
                                <div className='flex items-center'>
                                    <p className='text-center text-secondary text-base me-1'>Live Preview</p>
                                    <FiExternalLink className='text-base' />
                                </div>
                            </div>
                        </div>
                    </Link>
                </Slide>
                <Slide direction='up'>
                    <Link
                        target={"_blank"}
                        to="https://drive.google.com/file/d/13rJTtAtqQ4UVjZwBZKLKW_pNbSTBJcK-/view?usp=sharing"
                        className="group/item hover:card hover:bg-base-100 image-full cursor-pointer relative"
                    >
                        <figure>
                            <img src={programmingHeroCertificate} alt="Programming Hero Certificate" className="rounded-xl" />
                        </figure>
                        <div className='card-body absolute top-0 bottom-0 flex justify-center items-center'>
                            <div className='group/edit invisible group-hover/item:visible'>
                                <HiOutlineViewfinderCircle className=' mx-auto text-4xl text-secondary' />
                                <div className='flex items-center'>
                                    <p className='text-center text-secondary text-base me-1'>Live Preview</p>
                                    <FiExternalLink className='text-base' />
                                </div>
                            </div>
                        </div>
                    </Link>
                </Slide>
                <Slide direction='down'>
                    <Link
                        target={"_blank"}
                        to="https://drive.google.com/file/d/1EHEZniJnXRO1AF1WUGw0znhCDJtf9dL7/view?usp=sharing"
                        className="group/item hover:card hover:bg-base-100 image-full cursor-pointer relative"
                    >
                        <figure>
                            <img src={utcCertificate} alt="UTC Certificate" className="rounded-xl" />
                        </figure>
                        <div className='card-body absolute top-0 bottom-0 flex justify-center items-center'>
                            <div className='group/edit invisible group-hover/item:visible'>
                                <HiOutlineViewfinderCircle className=' mx-auto text-4xl text-secondary' />
                                <div className='flex items-center'>
                                    <p className='text-center text-secondary text-base me-1'>Live Preview</p>
                                    <FiExternalLink className='text-base' />
                                </div>
                            </div>
                        </div>
                    </Link>
                </Slide>
            </div>
        </section>
    );
};

export default Certificate;