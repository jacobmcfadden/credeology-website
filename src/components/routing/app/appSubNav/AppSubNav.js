import React from 'react';
import {Link} from 'react-router-dom';

const AppSubNav = (props) => {
  return (
    <div className="AppSubNav pd-tb-1">
      <div className="container-lg">
        <div className='container__row'>
            <nav className="container__col-12">
              <div className="container__row-end">
              <li className="container__col-2"><Link to={`/app`} className="nav-link">Action 2</Link></li>
              <li className="container__col-2"><Link to={`app/account`}className="nav-link">Action 1</Link></li>
              </div>
            </nav>
            
        </div>
      </div>
    </div>
  );
}

export default AppSubNav;