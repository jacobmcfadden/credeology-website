import React from 'react';

import Navbar from '../../../containers/sections/website/header/Navbar';
import Banner from '../../../containers/sections/website/header/Banner';

const Website = (props) => {
   
    return (
        <div className="Website" >
            <Navbar/>
            <Banner/>
        </div>
    );
};

export default Website;