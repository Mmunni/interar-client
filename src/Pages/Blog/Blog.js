import React from 'react';
import useTitle from '../../hooks/useTitle';
import Banner from '../Home/Banner/Banner';

const Blog = () => {
    useTitle('blog');
    return (
        <div>
            <Banner/>
            <div className='max-w-screen-xl mx-auto py-32'>
            <div className="title text-center">
            <p className="font-bold theme-color py-5 text-xl">Our Blogs</p>
            <h1 className="text_2xl md: text-3xl lg:text-6xl font-bold  pb-24">
            News & <span className='theme-color'> Updates</span>  
           
            </h1>
            </div>
            </div>
        </div>
    );
};

export default Blog;