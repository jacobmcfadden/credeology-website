import React from 'react';

import Navbar from './header/Navbar';
import Banner from './header/Banner';
import Products from './sections/Products';
import Features from './sections/Features';
import Solutions from './sections/Solutions';
import Pricing from './sections/Pricing';
import ContactUs from './sections/ContactUs';
import Footer from './footer/Footer';

const Website = (props) => {
   
    return (
        <div className="Website" >
            <Navbar/>
            <Banner/>
            <Products/>
            <Features/>
            <Solutions/>
            <Pricing/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Website;