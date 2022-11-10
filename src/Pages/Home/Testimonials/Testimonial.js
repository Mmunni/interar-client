import React from 'react';
import './Testimonial.css';

import img1 from '../../../assets/testimonials/01.jpg';
import img2 from '../../../assets/testimonials/02.jpg';
import img3 from '../../../assets/testimonials/03.jpg';
import img4 from '../../../assets/testimonials/04.jpg';

const Testimonial = () => {

    return (
        <div className='max-w-screen-xl mx-auto py-32'>
              <div className="title text-center">
          <p className="font-bold theme-color py-5 text-xl">Met Our Team</p>
          <h1 className="text_2xl md: text-3xl lg:text-6xl font-bold  pb-24">
          Let's See Our <span className='theme-color'> Expert</span>  <br/>
          Engineers
          </h1>
        </div>
        <div className="testimonial-area flex flex-col items-center sm:flex-col md:flex-col lg:flex-row">
        <div className="single-member w-80 lg:mr-10 ">
                <img src={img1} alt="" />
                <div className="details text-center">
                <h3 className=' pt-3 text-xl lg:text-2xl font-bold secondary-color'>Jhon Doe</h3>
                <p className='text-sm lg:text-base theme-color font-semibold mb-8'>Interior Desinger</p>
                </div>
            </div>
            <div className="single-member w-80 lg:mr-10">
                <img className='' src={img2} alt="" />
                <div className="details text-center">
                <h3 className=' pt-3 text-xl lg:text-2xl font-bold secondary-color'>Alica Bendor</h3>
                <p className='text-sm lg:text-base theme-color font-semibold mb-8'>Interior Desinger</p>
                </div>
            </div>
            <div className="single-member w-80 lg:mr-10">
                <img src={img3} alt="" />
                <div className="details text-center">
                <h3 className=' pt-3 text-xl lg:text-2xl font-bold secondary-color'>Robert Tylor</h3>
                <p className='text-sm lg:text-base theme-color font-semibold mb-8'>Interior Desinger</p>
                </div>
            </div>
            <div className="single-member w-80">
                <img src={img4} alt="" />
                <div className="details text-center">
                <h3 className=' pt-3 text-2xl font-bold secondary-color'>Sebastian Turner</h3>
                <p className='text-sm lg:text-base theme-color  font-semibold'>Interior Desinger</p>
                </div>
            </div>
        </div>

        </div>
    );
};

export default Testimonial;