import React from 'react';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner-info">
                <h1 className="banner-title">Secure access for everyone. But not just anyone.</h1>
                <p className="banner-phrase">Whether you’re a developer looking to innovate or a security professional looking to mitigate, we make identity work for everyone.</p>
                <div className="form-container">
                    <input type="email" required="" name="email" placeholder="Your work email" value="" className="banner-input"/>
                    <button className="banner-btn">Get started</button>
                </div>
            </div>
        </div>
    );
}

export default Banner;