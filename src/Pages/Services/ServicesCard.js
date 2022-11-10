import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const SevicesCard = ({ service }) => {
  const { img,price, description, title, _id} = service;
  return (
    <div>
      <div className="card w-96 h-full bg-base-100 shadow-xl mb-4">
        <figure className="px-10 pt-10">
        <PhotoProvider>
      <PhotoView src={img}>
        <img src={img} alt="" />
      </PhotoView>
    </PhotoProvider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title my-2 theme-color">{title}</h2>
          <p className="text-2xl font-semibold text-red-400"> ${price}</p>
          {description.length > 150 ? (
                <p>
                  {description.slice(0, 150) + "...."}{" "}
                  <div className="card-actions text-center items-center mt-5">
           <Link to={`/services/${_id}`}>
              <button className="btn bg-theme-color w-full mx-auto">View Details</button>
           </Link>
          </div>
                </p>
              ) : (
                <p className="mt-4">{description}</p>
              )}
          
        </div>
      </div>
    </div>
  );
};

export default SevicesCard;
