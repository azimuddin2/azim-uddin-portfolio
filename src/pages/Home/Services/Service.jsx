import React, { useState } from 'react';

const Service = ({ service }) => {
    const { image, name, description } = service;
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <div className="card border mb-14 hover:border-primary cursor-pointer">
            <figure className="px-10 pt-10 w-40 mx-auto">
                <img src={image} alt="Shoes" className="w-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <div className='text-accent'>
                    {isReadMore ? description.slice(0, 100) + '...' : description}
                    <p onClick={toggleReadMore} className='inline'>
                        {
                            isReadMore ?
                                <span className='link font-semibold text-primary'>more</span>
                                :
                                <span className='link font-semibold text-primary ms-1'>less</span>
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Service;