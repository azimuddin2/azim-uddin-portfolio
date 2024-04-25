import React from 'react';

const Service = ({ service }) => {
    const { image, name, description } = service;
    return (
        <div className="card shadow mb-10">
            <figure className="px-10 pt-10 w-40 mx-auto">
                <img src={image} alt="Shoes" className="w-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;