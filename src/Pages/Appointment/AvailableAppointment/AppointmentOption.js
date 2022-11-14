import React from 'react';

const AppointmentOption = ({ option,setTreatment}) => {
    const { name, slots } = option;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title text-secondary  justify-center text-xl font-semibold text-center">{name}</h2>
                <p className='font-normal  text-base'>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p className='uppercase font-normal mb-3 text-sm'>{slots.length} {slots.length > 1 ? 'spaces': 'space'} Available</p>
                <div className="card-actions justify-center">
                    <label disabled={slots.length === 0} onClick={()=> setTreatment(option)} htmlFor="booking-modal" className="btn btn-primary bg-gradient-to-r from-primary to-secondary uppercase text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;