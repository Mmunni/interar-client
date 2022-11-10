import React from 'react';
import { Link } from 'react-router-dom';
import SevicesCard from '../../Services/ServicesCard';

const Service = ({services}) => {
    return (
        <div>
            <div className='max-w-screen-xl mx-auto pt-10 Pb-32'>
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
        <Link to={'/services'}>
            <button className="btn bg-theme-color text-center mt-12 mx-auto">See All</button>
            </Link>
            </div>
        </div>
    );
};

export default Service;