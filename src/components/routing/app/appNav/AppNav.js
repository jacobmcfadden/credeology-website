import React, { useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import MenuIcon from '../../../../assets/icons/MenuIcon';

const AppNav = (props, {match}) => {
  let location = useLocation();

  const setFocus = () => {
      document.getElementById(location.pathname).focus();
    };

  useEffect(() => {
    setFocus()
  })

  

  return (
    <div className="AppNav pd-tb-1">
      <div className="container-lg">
        <div className='container__row'>
            <div className="container__col-1">
              <MenuIcon className="icon-light"/>      
            </div>
            <div className="container__col-1">
              <div className="breadcrumb">{location.pathname}</div>
            </div> 
            <nav className="container__col-9">
              <div className="container__row-end">
              <li className="container__col-1"><Link to={`/app`} id="/app" className="nav-link" >Portal</Link></li>
              <li className="container__col-1"><Link to={`/app/account`}className="nav-link">Account</Link></li>
              </div>
            </nav>
            <div className="container__col-1">
              <div className="circle container__col-1">
                <p className="circle-initials">JM</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AppNav;