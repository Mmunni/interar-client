import React from 'react';
import img1 from '../../../assets/banner/slide1.jpg';
import img2 from '../../../assets/banner/slide2.jpg';
import img3 from '../../../assets/banner/slide3.jpg';

import BannerItems from './BannerItems';

const bannerData = [
  {
      image: img1,
      prev: 3,
      id: 1,
      next: 2
  },
  {
      image: img2,
      prev: 1,
      id: 2,
      next: 3
  },
  {
      image: img3,
      prev: 2,
      id: 3,
      next: 1
  }
]

const Banner = () => {
    return (
        <div className="carousel w-full">
        {
          bannerData.map(slide => <BannerItems
          key={slide.id}
          slide={slide}
          >
          </BannerItems>)
        }
      </div>
    );
};

export default Banner;