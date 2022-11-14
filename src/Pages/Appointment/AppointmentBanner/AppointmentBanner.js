import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {



    return (
        <section>
            <div className="hero py-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='banner' className="rounded-lg lg:w-1/2 shadow-2xl" />
                    <div className='mr-7'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;