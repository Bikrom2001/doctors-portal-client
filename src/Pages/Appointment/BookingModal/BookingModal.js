import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment}) => {
    const { name, slots } = treatment; // treatement is appointment option
    const date = format(selectedDate, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const names = form.names.value;
        const slot = form.slot.value;
        const email = form.email.value;
        const number = form.number.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: names,
            slot,
            email,
            number,
        }

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast

        console.log(booking);
        setTreatment(null);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className="space-y-6 pt-8">
                        <div className="space-y-1 text-sm">
                            <input type="text" name="date" id="date" disabled value={date} className="w-full text-base px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <select name='slot' className="rounded-md border text-base cursor-pointer border-black dark:text-black focus:dark:border-violet-400 px-4 py-3 w-full">
                               {
                                slots.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
                               }
                            </select>
                        </div>
                        <div className="space-y-1 text-sm">
                            <input type="text" name="names" id="name" placeholder="Full Name" className="w-full px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <input type="text" name="number" id="number" placeholder="Phone Number" className="w-full px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <input type="email" required name="email" id="Email" placeholder="Email Address" className="w-full px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                        </div>
                        <button type='submit' className="block w-full p-3 text-center rounded-sm text-white bg-gradient-to-r from-primary to-secondary">SUBMIT</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;