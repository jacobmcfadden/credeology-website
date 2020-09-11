import React from 'react';
import {Link} from 'react-router-dom';

const Banner = (props) => {
    return (
        <div className="Banner">
        <div className="section-banner home-banner">
            <div className="trans-overlay">
                <div className="container-md">
                    <h1 className="headline container__row-center">Business Management Reinvented</h1>
                    <p className="phrase container__row-center">Agile data driven management software designed to deliver results never thought possible.</p>
                    <div className="container__row-center banner-btn">
                        <div className="container__col-2 container__col-offset-1">
                            <Link to="#" className=""><button className="btn-std-lg-orange">GET STARTED</button></Link>
                        </div>
                        <div className="container__col-2">
                            <Link to="/#products"className=""><button className="btn-frm-lg-light">MORE INFO</button></Link>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
        <div className="banner-ribbon container__row">
                <div className="container__col-12">
                    {/* <p className="headline">This is the banner ribbon</p> */}
                </div>
            </div>
        </div>
    );
}

export default Banner;