import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../../../assets/logo/Logo';
import Credeology from '../../../../assets/logo/Credeology';

const Navbar = (props) => {
  return (
    <div className="Navbar">
      <div className="container-md">
        <div className='container__row'>
            <Link to="/" className="container__col-3">
              <div className="container__row logo">
                <Logo SVGClass="size-3" fill="fill-light"/>
                <Credeology margin="mg-t-65" size="size-3" fill="fill-light"/>              
              </div>
            </Link>
            <nav className="container__col-7">
              <div className="container__row-end">
              <li className="container__col-2"><Link to="/#products" className="nav-link">Products</Link></li>
              <li className="container__col-2"><Link to="/#features" className="nav-link">Features</Link></li>
              <li className="container__col-2"><Link to="/#solutions" className="nav-link">Solutions</Link></li>
              <li className="container__col-2"><Link to="/#pricing" className="nav-link">Pricing</Link></li>
              <li className="container__col-2"><Link to="/#talktous" className="nav-link">Contact Us</Link></li>
              </div>
            </nav>
            <div className="container__col-2">
            <div className="container__row">
              <div className="container__col-6"><Link to="/login"><button className="btn">Login</button></Link></div>
              <div className="container__col-6"><Link to="/signup"><button className="btn-white">Signup</button></Link></div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;