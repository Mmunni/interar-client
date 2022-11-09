import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    useTitle('home');
    return (
        <div>
            <Banner/>
            <About/>
        </div>
    );
};

export default Home;