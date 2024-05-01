import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
    const { image, name, description, link } = project;
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <div className="card shadow my-16 m-1 lg:mx-0">
            <figure className="px-5 pt-5">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <div className="text-accent">
                    {isReadMore ? description.slice(0, 110) + '...' : description}
                    <p onClick={toggleReadMore} className='inline'>
                        {
                            isReadMore ?
                                <span className='link font-semibold text-primary'>more?</span>
                                :
                                <span className='link font-semibold text-primary ms-1'>less</span>
                        }
                    </p>
                </div>

                <div className="card-actions flex justify-center items-center mt-2">

                    <Link target={"_blank"} to={link}>
                        <button
                            className="btn btn-primary btn-sm rounded text-white"
                        >
                            Live Preview
                            <FiExternalLink className='text-base' />
                        </button>
                    </Link>

                    <button
                        className="btn btn-outline btn-primary btn-sm rounded preview-btn"
                    >
                        <span>Project Details</span>
                        <IoArrowForwardCircleOutline className="text-lg -ms-1" />
                    </button>
                    
                </div>

            </div>
        </div>
    );
};

export default Project;