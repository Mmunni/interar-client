import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Work from '../Work/Work';



const Home = () => {
    useTitle('home');
    return (
        <div>
            <Banner/>
            <About/>
           <Work/>
        </div>
    );
};

export default Home;