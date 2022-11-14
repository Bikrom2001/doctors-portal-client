import React from 'react';
import Appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section className='py-12' style={{
            background: `url(${Appointment})`
        }}>
            <div className="w-full  mx-auto max-w-md p-8 space-y-3 rounded-xl ">
                <h2 className='text-primary text-center font-bold text-xl mb-2'>Contact Us</h2>
                <h1 className="text-3xl font-normal text-center text-white">Stay connected with us</h1>
                <form  className="flex flex-col w-full max-w-lg pt-7">
                    <input id="email" placeholder='Email Address' type="email" className="flex items-center h-12 px-4  rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" />

                    <input id="subject" placeholder='Subject' type="text" className="flex items-center h-12 px-4 mt-5 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" />

                    <textarea id="message" placeholder='Your message' rows='3' type="text" className="flex items-center  px-4 mt-5 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" />

                    <button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-bold uppercase rounded text-white bg-gradient-to-r from-primary to-secondary">Submit</button>
                   
                </form>
              
            </div>
        </section>
    );
};

export default ContactUs;