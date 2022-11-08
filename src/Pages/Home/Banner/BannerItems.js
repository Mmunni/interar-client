import React from 'react';
import './BannerItems.css';
const BannerItems = ({slide}) => {
    const {image, prev, next, id} = slide;
    return (
            <div id={`slide${id}`} className="carousel-item relative w-full h-screen">
        <div className="carasoul-img">
        <img src={image} className="w-full  rounded-lg" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-28  top-1/3">
         <h1 className='text-8xl font-bold text-white'>
            World class<br/>
          <span className='theme-color'>Interior</span> Design <br/>
         </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2  left-28 top-1/2 mt-8">
          <p className='text-lg font-semibold text-white leading-7'>
          We have almost 20+ years of experience for providing <br/>
           interior & Architectural services solutions
          </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-32 top-2/3">
          <button className="btn animate-btn text-white">Read More</button>
          
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href={`#slide${prev}`} className="btn  prev-btn">❮</a> 
          <a href={`#slide${next}`} className="btn  next-btn">❯</a>
        </div>
           </div>

       
    );
};

export default BannerItems;