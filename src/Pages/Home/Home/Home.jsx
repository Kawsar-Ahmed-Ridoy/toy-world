import React from 'react';
import Banner from '../Banner/Banner';
import Subscription from '../Subscription/Subscription';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;