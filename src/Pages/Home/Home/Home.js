import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import HomeAbout from '../HomeAbout/HomeAbout';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <InfoCards></InfoCards>
           <Services></Services>
           <HomeAbout></HomeAbout>
           <MakeAppointment></MakeAppointment>
           <Testimonials></Testimonials>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;