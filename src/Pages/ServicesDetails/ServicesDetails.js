import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const servicesDetails = useLoaderData();
    const { title, description, img } = servicesDetails;
    return (
        <div className='max-w-screen-xl mx-auto pt-32'>
            <div className="card full h-full bg-base-100 shadow-xl mb-4">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title my-5 theme-color">{title}</h2>
          <p>{description}</p>
          
        </div>
      </div>
        </div>
    );
};

export default ServicesDetails;