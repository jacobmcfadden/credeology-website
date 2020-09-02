import React from 'react';

const Footer = (props) => {
    return (
        <div className="Footer">
          <footer className="container-md"> 
            <div className="container__row">
              <div className="container__col-4">
                <h4 className="title">Navigation</h4>
                <nav className="list">
                    <li className="bottom-nav-link">products</li>
                    <li className="bottom-nav-link">features</li>
                    <li className="bottom-nav-link">solutions</li>
                    <li className="bottom-nav-link">pricing</li>
                    <li className="bottom-nav-link">Contact us</li>
                </nav>
              </div>
              <div className="container__col-4">
                <p className="copyright">© 2020 Credeology All Rights Reserved.</p>
              </div>
              <div className="container__col-4">
                  <p className="title">Follow Us</p>
                  <ul className="container__row">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Youtube</li>
                    <li>LinkedIn</li>
                  </ul>
              </div>
            </div>
          </footer>
        </div>
    );
}

export default Footer;