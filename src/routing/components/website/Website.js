import React from 'react';

import Navbar from '../../../containers/sections/website/header/Navbar';
import Banner from '../../../containers/sections/website/header/Banner';
import Products from '../../../containers/sections/website/sections/Products';
import Features from '../../../containers/sections/website/sections/Features';
import Solutions from '../../../containers/sections/website/sections/Solutions';
import Pricing from '../../../containers/sections/website/sections/Pricing';
import ContactUs from '../../../containers/sections/website/sections/ContactUs';
import Footer from '../../../containers/sections/website/footer/Footer';

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