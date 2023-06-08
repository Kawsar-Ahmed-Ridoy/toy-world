import React from 'react';
import Banner from '../Banner/Banner';
import Subscription from '../Subscription/Subscription';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <About></About>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;