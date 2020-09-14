import React from 'react';

const Footer = (props) => {
    return (
        <div className="Footer">
          <footer className="container"> 
            <div className="container__row">
              <div className="container__col-4">
                <h4 className="title m-r-auto">Navigation</h4>
                <nav className="list">
                    <li className="">products</li>
                    <li className="">features</li>
                    <li className="">solutions</li>
                    <li className="">pricing</li>
                    <li className="">Contact us</li>
                </nav>
              </div>
              <div className="container__col-4">
                <p className="">© 2020 Credeology All Rights Reserved.</p>
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