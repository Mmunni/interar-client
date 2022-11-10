import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';

const ServicesDetails = () => {
    const servicesDetails = useLoaderData();
    const { title,price, description, img, _id } = servicesDetails;

    useEffect(() => {
      fetch(`http://localhost:5000/services/${service}`)
          .then(res => res.json())
          .then(data => setOrderService(data));
  }, [service])

    return (
        <div className='max-w-screen-xl mx-auto pt-32'>
      <div className="grid grid-cols-1">
            <div className="card full h-full bg-base-100 shadow-xl mb-4">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt=""
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title my-5 theme-color">{title}</h2>
          <p className="text-2xl font-semibold text-orange-500"> ${price}</p>
          <p>{description}</p>
          <Link to={`/reviewform/${_id}`}>
              <button className="btn bg-theme-color w-full mx-auto">Add Review</button>
           </Link>
        </div>
            </div>
            <div>
              <Review/>
            </div>
            </div>

        </div>
    );
};

export default ServicesDetails;