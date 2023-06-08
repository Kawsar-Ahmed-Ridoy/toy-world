import React from 'react';
import Banner from '../Banner/Banner';
import Subscription from '../Subscription/Subscription';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <About></About>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;