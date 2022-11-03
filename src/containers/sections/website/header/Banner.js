import React from 'react';
import {Link} from 'react-router-dom';
const Banner = (props) => {
    const handleMoreInfo = () => {

    }

    return (
        <div className="Banner">
        <div className="section-banner home-banner">
            <div className="trans-overlay">
                <div className="container-md">
                    <div className="headline container__row justify-center"><h1 className="flex m-h-2">Create. Design. Technology.</h1></div>
                    <p className="phrase container__row justify-center m-t-2">Custom built logic for user notifications and two-factor authentication</p>
                    <div className="flex justify-center align-center m-t-2">
                        <div className="m-r-1">
                            <Link to="/auth/signup" className=""><button className="btn-std-lg-orange">GET STARTED</button></Link>
                        </div>
                        <div className="m-l-1">
                            <button className="btn-frm-lg-light" onClick={handleMoreInfo}>MORE INFO</button>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
        <div className="banner-ribbon container__row">
                <div className="container__col-12">
                    <div className="container">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;