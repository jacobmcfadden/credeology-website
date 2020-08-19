import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="nav-wrapper">
                <nav className="main-nav">
                    <a href="/" rel="external" className="logo">{/* SVG Logo */}</a>
                    <ul role="menubar" className="menubar">
                        <li role="menuitem" className="nav-item">
                            <div className="item-container">
                                <h2 className="nav-title">Platform</h2>
                            </div>
                        </li>
                    </ul>
                    <div className="btn-container">
                        <a href="/auth/login" rel="" className="login-btn">Login</a>
                        <button className="header-btn">Sign Up</button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;