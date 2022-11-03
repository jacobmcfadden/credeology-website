import React, {useEffect, useState, useRef} from 'react';
import Navbar from '../../../containers/sections/website/header/Navbar';
import Banner from '../../../containers/sections/website/header/Banner';
import Footer from '../../../containers/sections/website/footer/Footer';
import useEventListener from '../../../hooks/useEventListener';
import UserExpSection from '../../../containers/sections/website/sections/UserExpSection';
import UserAuthSection from '../../../containers/sections/website/sections/UserAuthSection';

const Website = (props) => {
    const [backgroundColor, setBackgroundColor] = useState('bg-trans');

    const listenScrollEvent = e => {
        console.log("called listScrollEvent")
        if (window.scrollY > 1) {
            setBackgroundColor('bg-black');
        } else {
            setBackgroundColor('bg-green');
        }
    }    

    useEventListener('scroll', listenScrollEvent)
      
    return (
        <div className="Website">
            <Navbar backgroundColor={backgroundColor}/>
            <Banner/>
            <UserAuthSection/>
            <Footer/>
        </div>
    );
};

export default Website;