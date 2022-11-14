import React from 'react';
import './Reviews.css';

const Reviews = ({ review }) => {

    const { name, img, reviews, location } = review;

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{reviews}</p>
                <div className="card-actions items-center gap-3 mt-7">
                   <img className='reviews-img rounded-full' src={img} alt="images" />
                   <div>
                    <h4 className='font-semibold text-xl'>{name}</h4>
                    <p className='font-normal text-base'>{location}</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;