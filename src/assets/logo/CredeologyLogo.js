import React from 'react';
import Logo from './Logo';
import Credeology from './Credeology';
import {Link} from 'react-router-dom';

const CredeologyLogo = (props) => {
    const {logoType} = props;

    let icon = () => {
        switch(logoType){
            case 'form':
                return  (<div className="container__col-10 container__col-offset-1">
                            <div className={`container__row align-content`}>
                                <Logo SVGClass="size-6 container__col-12" pathClass="fill-primary"/>  
                            </div>
                            <div className="container__row align-content m-t-1">
                                <Credeology SVGClass="size-2 container__col-12" pathClass="fill-dark"/>
                            </div>
                        </div>);
            default:
                return  (<Link to="/" className="flex justify-center m-v-1">
                            <div className="CredeologyLogo">
                                <Logo SVGClass="size-3" pathClass="fill-primary"/>  
                                <Credeology SVGClass="size-2" pathClass="fill-light"/>
                            </div>
                        </Link>);
        }
    }

  return (
    icon()
  );
}

export default CredeologyLogo;
