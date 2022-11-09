import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';

const Home = () => {
    useTitle('home');
    return (
        <div>
            <Banner/>
        </div>
    );
};

export default Home;