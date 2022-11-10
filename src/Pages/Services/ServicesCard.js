import React from "react";
import { Link } from "react-router-dom";

const SevicesCard = ({ service }) => {
  const { img, description, title, _id} = service;
  return (
    <div>
      <div className="card w-96 h-full bg-base-100 shadow-xl mb-4">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title my-2 theme-color">{title}</h2>
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
