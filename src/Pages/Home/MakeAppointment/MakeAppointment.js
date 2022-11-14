import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import Appointment from '../../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <section className='mt-14' style={{
            background: `url(${Appointment})`
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:p-0 lg:flex-row">
                    <img src={doctor} alt='' className=" -mt-36 hidden md:block lg:w-1/2 rounded-lg" />
                    <div>
                        <h2 className='font-bold text-xl text-primary mb-5'>Appointment</h2>
                        <h1 className="text-4xl font-semibold text-white">Make an appointment Today</h1>
                        <p className="py-6 font-normal text-base text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary uppercase text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;