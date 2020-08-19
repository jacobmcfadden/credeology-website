import React from 'react';

const Footer = () => {
    return (
          <div className="footer-wrapper">
            <footer className="footer">
              <nav>
                <ul className="bottom-nav-container">
                  <li className="item with sublist">
                    <div className="item-container">
                      <div className="colapsed-portion">
                        <p className="item-title">Features</p>
                        {/* SVG */}
                      </div>
                      <ul className="sub-list">
                        <li className="list-item">
                          <span role="menuitem" className="styled__ListItem-sc-1r2epjk-5-span iisAkJ">
                            <a href="https://auth0.com/universal-login/" rel="external">
                              <span className="styled__ListItemName-sc-1r2epjk-1 dmxndn">Universal Login</span>
                              <span className="styled__ArrowContainer-sc-1r2epjk-0 sorO">{/* SVG */}</span>
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="item without sublist">
                    <div className="styled__ListItemWrapper-sc-30bvou-6 jWiCoA">
                      <span role="menuitem" className="styled__ListItem-sc-1r2epjk-5-span iisAkJ">
                        <a href="https://auth0.com/pricing/" rel="external">
                          <span className="styled__ListItemName-sc-1r2epjk-1 dmxndn">Pricing</span>
                          <span className="styled__ArrowContainer-sc-1r2epjk-0 sorO">{/* SVG */}</span>
                        </a>
                      </span>
                    </div>
                  </li>
                 </ul>
              </nav>
            <div className="open-accordian">
              <aside className="accordian-item">
                <p className="accordian-title">Contact Us:</p>
                <address>
                  <p>Street Address Here</p>
                  <p>City State ZIP</p>
                  <p>Phone Number</p>
                </address>
              </aside>
            </div>
          </footer>
        <section className="bottom-footer">
          <div className="footer-container">
            <div className="social-media-list">
              <a href="https://twitter.com/auth0" rel="" target="" className="social-media-link">
                {/* SVG twitter logo */}
              </a>
              <a href="https://www.linkedin.com/company/auth0" rel="" target="" className="social-media-link">
                {/* SVG linkedIn Logo */}
              </a>
              <a href="https://facebook.com/credeology" rel="" target="" className="social-media-link">
                {/* SVG facebook Logo */}
              </a>
              <a href="https://www.instagram.com/credeology" rel="" target="" className="social-media-link">
                {/* SVG instagram Logo */}
              </a>
            </div>
            <p className="copyright">© 2013 - 2020 Credeology All Rights Reserved.</p>
          </div>
        </section> 
         </div>
    );
}

export default Footer;