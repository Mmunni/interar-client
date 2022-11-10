import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Banner from '../Home/Banner/Banner';
import SevicesCard from './ServicesCard';

const Services = () => {
    useTitle('services');
    const services = useLoaderData();
    return (
        <div>
            <Banner/>
            <div className='max-w-screen-xl mx-auto pt-32'>
            <div className="title text-center">
            <p className="font-bold theme-color py-5 text-xl">Our Services</p>
            <h1 className="text_2xl md: text-3xl lg:text-6xl font-bold  pb-24">
            We Provide  <span className='theme-color'> Interior</span>  <br/>
            Design Services
            </h1>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <SevicesCard
                    key={service._id}
                    service={service}
                    >
                    </SevicesCard>)
                }
        </div>
            </div>
        </div>
    );
};

export default Services;