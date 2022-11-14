import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({selectedDate}) => {

    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <section>
            <p className='text-center text-secondary font-normal text-2xl pt-10'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 py-20 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option => <AppointmentOption key={option._id} option={option} setTreatment={setTreatment}></AppointmentOption>)
                }
            </div>
           {
            treatment &&
             <BookingModal treatment={treatment} selectedDate={selectedDate} setTreatment={setTreatment}></BookingModal>
           }
        </section>
    );
};

export default AvailableAppointment;