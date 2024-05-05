import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Project = ({ project, setProjectModal }) => {
    const { image, name, description, link } = project;
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <div className="card shadow my-12 lg:my-16 m-1 lg:mx-0 cursor-default bg-success">
            <figure className="px-5 pt-5">
                <img src={image} alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body p-5 lg:p-8 pb-6 lg:pt-5">
                <h2 className="card-title text-secondary">{name}</h2>
                <div className="text-accent text-sm lg:text-base">
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
                    <label
                        onClick={() => setProjectModal(project)}
                        htmlFor="project-details-modal"
                        className="btn btn-outline btn-primary btn-sm rounded preview-btn"
                    >
                        <span>Project Details</span>
                        <IoArrowForwardCircleOutline className="text-lg -ms-1" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Project;