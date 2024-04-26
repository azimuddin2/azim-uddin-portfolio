import { useState } from "react";

const Project = ({ project }) => {
    const { image, name, description } = project;
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <div className="card shadow my-20">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <div className="text-accent">
                    {isReadMore ? description.slice(0, 110) + '...' : description}
                    <p onClick={toggleReadMore} className='inline'>
                        {
                            isReadMore ?
                                <span className='link font-semibold text-primary'>more</span>
                                :
                                <span className='link font-semibold text-primary'>less</span>
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Project;