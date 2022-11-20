import React, {useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Share/Loading/Loading';

const AvailableAppointment = ({selectedDate}) => {

    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const {data:appointmentOptions=[], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/v2/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        } 
    })

    if(isLoading){
        return <Loading></Loading>
    }

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
             <BookingModal treatment={treatment} selectedDate={selectedDate} setTreatment={setTreatment} refetch={refetch} ></BookingModal>
           }
        </section>
    );
};

export default AvailableAppointment;