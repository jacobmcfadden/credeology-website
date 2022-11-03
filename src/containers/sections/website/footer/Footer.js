import React from 'react';
import Credeology from '../../../../assets/logo/Credeology';
import TechnologiesUsed from '../../../lists/cards/TechnologiesUsed';
import CredeologyLogo from '../../../../assets/logo/CredeologyLogo';
const Footer = (props) => {
    return (
        <footer className="Footer">
          <TechnologiesUsed/>
          <div className="m-t-3">
          <CredeologyLogo/> 
          </div>
          <div>
          <p className="caption-white flex justify-center m-t-2">Copyright © 2020 Credeology. All rights reserved.</p>
          </div>
        </footer>
    );
}

export default Footer;