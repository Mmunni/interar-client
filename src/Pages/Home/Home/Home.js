import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Testimonial from '../Testimonials/Testimonial';
import Service from '../Service/Service';
import Work from '../Work/Work';
import { Link, useLoaderData } from 'react-router-dom';



const Home = () => {
    useTitle('home');
    const services = useLoaderData();
    return (
        <div>
            <Banner/>
            <About/>
            <Service services={services}></Service>
           <Work/>
           <Testimonial/>
        </div>
    );
};

export default Home;