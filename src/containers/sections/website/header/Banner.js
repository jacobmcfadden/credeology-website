import React from 'react';
import {Link} from 'react-router-dom';

const Banner = (props) => {
    return (
        <div className="Banner">
        <div className="section-banner home-banner">
            <div className="trans-overlay">
                <div className="container-md">
                    <h1 className="headline container__row justify-center">Business Management Reinvented</h1>
                    <p className="phrase container__row justify-center">Agile data driven management software designed to deliver results never thought possible.</p>
                    <div className="flex justify-center align-center m-t-2">
                        <div className="m-r-1">
                            <Link to="#" className=""><button className="btn-std-lg-orange">GET STARTED</button></Link>
                        </div>
                        <div className="m-l-1">
                            <Link to="/#products"className=""><button className="btn-frm-lg-light">MORE INFO</button></Link>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
        <div className="banner-ribbon container__row">
                <div className="container__col-12">
                </div>
            </div>
        </div>
    );
}

export default Banner;