import React from "react";
import about from "../../../assets/about/about.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen pt-24 pb-24">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <img
            src={about}
            alt=""
            className="w-4/5 h-full rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/2">
          <p className="font-bold theme-color py-5 text-xl">
            About Our Company
          </p>
          <h1 className="text-5xl font-bold">
            Providing the best <br />
            <span className="theme-color">architecture</span> & interior <br />
            design services
          </h1>
          <p className="py-6">
            What is interior of the house? Interior commonly refers to the
            inside of something. When house hunting you might find that the
            outside of the house is run down, but the interior rooms beautifully
            renovated. If you design the color scheme of a room and pick our
            furnishings for it, you are an interior designer.{" "}
          </p>
          <p className="py-6">
          A good interior designer will balance the detail while still keeping their eyes on the big picture. Perfection is a series of small things done really well.{" "}
          </p>
          <button className=" animate-btn text-white">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
