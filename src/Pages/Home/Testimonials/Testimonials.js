import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Reviews from './Reviews';

const Testimonials = () => {

    const reviews = [
        {
            _id: 1, 
            name: 'Winson Herry',
            img: people1,
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 2, 
            name: 'Winson Herry',
            img: people2,
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 3, 
            name: 'Winson Herry',
            img: people3,
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
    ]

    return (
        <section className='py-20'>
            <div className='flex justify-between items-center mb-12'>
                <div>
                    <h2 className='text-xl text-primary mb-2 font-bold'>Testimonial</h2>
                    <h1 className='font-normal text-4xl'>What Our Patients Says</h1>
                </div>
                <figure>
                    <img className='lg:w-48 w-24' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Reviews key={review._id} review={review}></Reviews>)
                }
            </div>
        </section>
    );
};

export default Testimonials;