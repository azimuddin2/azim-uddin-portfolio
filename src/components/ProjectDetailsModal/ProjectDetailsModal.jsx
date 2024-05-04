import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ProjectDetailsModal.css';
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

const ProjectDetailsModal = ({ projectDetails, closeModal }) => {
    const { images, name, description, skills, link } = projectDetails;

    return (
        <div>
            <input type="checkbox" id="project-details-modal" className="modal-toggle" />
            <dialog id="project-details-modal" className="modal">
                <div className="modal-box lg:w-4/5 lg:max-w-5xl">
                    <form method="dialog">
                        <label
                            onClick={closeModal}
                            htmlFor="project-details-modal"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                            ✕
                        </label>
                    </form>


                    <div className="">

                        <h1 className=" text-2xl text-secondary font-semibold mb-2">{name}</h1>

                        <Carousel autoPlay infiniteLoop>
                            {
                                images?.map((image, index) => <div key={index} image={image}>
                                    <img src={image} alt={name} />
                                </div>)
                            }
                        </Carousel>


                        <p className="text-accent mb-6">{description}</p>


                        <h2 className="text-xl text-secondary font-medium mb-2">Technology Skills</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 w-11/12 lg:w-4/5 mx-auto">
                            {skills?.map((skill, index) => <span
                                className="text-center bg-[#e9e9e9] rounded-2xl p-1 text-sm"
                                key={index}
                                skill={skill}
                            >
                                {skill}
                            </span>)}
                        </div>

                        <Link
                            to={link}
                            target={"_blank"}
                            className="flex items-center justify-center mt-6 link link-primary"
                        >
                            <span>{link}</span>
                            <FiExternalLink className='text-base' />
                        </Link>


                    </div>


                </div>
            </dialog>
        </div>
    );
};

export default ProjectDetailsModal;