import React from 'react';
import './Service.css';

const Service = ({service}) => {

    const {name, description, img} = service;

    return (
        <div className="card serviceContainer bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-semibold text-xl">{name}</h2>
                <p className='font-normal text-base'>{description}</p>
            </div>
        </div>
    );
};

export default Service;