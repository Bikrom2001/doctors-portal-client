import React from 'react';
import { Link } from 'react-router-dom';
import treatment from '../../../assets/images/treatment.png';
import './HomeAbout.css';

const HomeAbout = () => {
    return (
        <section className="">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-11 lg:flex-row lg:gap-9">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
                    <img src={treatment} alt="" className="rounded-lg aboutImages" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-5xl">
                        Exceptional Dental Care, on Your Terms
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-gradient-to-r from-primary to-secondary text-white">GET STARTED</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;