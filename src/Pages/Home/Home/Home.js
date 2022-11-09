import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Testimonial from '../Testimonials/Testimonial';
import Work from '../Work/Work';



const Home = () => {
    useTitle('home');
    return (
        <div>
            <Banner/>
            <About/>
           <Work/>
           <Testimonial/>
        </div>
    );
};

export default Home;