import React from "react";
import { FaBuilding, FaGgCircle, FaHands, FaMedapps } from "react-icons/fa";
import "./Works.css";

const Work = () => {
  return (
    <div className="bg-secondary-color pt-24">
      <div className="works max-w-screen-xl mx-auto pb-44">
        <div className="title text-center">
          <p className="font-bold theme-color py-5 text-xl">How We Works</p>
          <h1 className="text-5xl font-bold text-white pb-24">
            Our Easy Working Steps
          </h1>
        </div>
        <div className="process-icon-box  flex flex-row sm:flex-column lg:flex-row justify-around">
            <div className="single-process-icon pr-10">
            <div className="process-icon theme-color text-5xl">
            <FaBuilding />
          </div>
          <div className="process-details text-center">
            <div className="process-title text-white text-2xl py-3">
              Visit Project
            </div>
            <div className="process-text text-white text-center">
              Our projects are unique.
            </div>
          </div>
            </div>
            <div className="single-process-icon pr-10">
            <div className="process-icon theme-color text-5xl">
            <FaGgCircle />
          </div>
          <div className="process-details text-center">
            <div className="process-title text-white text-2xl py-3">
            Planning Design
            </div>
            <div className="process-text text-white ">
              We planning for design.
            </div>
          </div>
            </div>
            <div className="single-process-icon pr-10">
            <div className="process-icon theme-color text-5xl">
            <FaMedapps />
          </div>
          <div className="process-details text-center">
            <div className="process-title text-white text-2xl py-3">
            Project Sketch
            </div>
            <div className="process-text text-white text-center">
             We sketch  Project for designing.
            </div>
          </div>
            </div>
            <div className="single-process-icon ">
            <div className="process-icon theme-color text-5xl">
            <FaHands />
          </div>
          <div className="process-details text-center">
            <div className="process-title text-white text-2xl py-3">
            Start Working
            </div>
            <div className="process-text text-white text-center">
              We start planning before work.
            </div>
          </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
