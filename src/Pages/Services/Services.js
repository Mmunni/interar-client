import React from 'react';
import useTitle from '../../hooks/useTitle';
import Banner from '../Home/Banner/Banner';

const Services = () => {
    useTitle('services');
    return (
        <div>
            <Banner/>
            <div className='max-w-screen-xl mx-auto py-32'>
            <div className="title text-center">
            <p className="font-bold theme-color py-5 text-xl">Our Services</p>
            <h1 className="text_2xl md: text-3xl lg:text-6xl font-bold  pb-24">
            We Provide  <span className='theme-color'> Interior</span>  <br/>
            Design Services
            </h1>
            </div>
            </div>
        </div>
    );
};

export default Services;