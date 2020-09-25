import React, { useState } from 'react';
import {useLocation} from 'react-router-dom';
import {connect} from 'react-redux';
import MenuIcon from '../../../../assets/icons/system/MenuIcon';
import NavList from '../../../lists/horizontal/NavList';
import HomeIcon from '../../../../assets/icons/system/HomeIcon';

const items = [
  // { name : "portal", where : "/app", display: "PORTAL", styling: "NavLinx-lg-light"},
  { name : "account", where : "/app/account", display: "ACCOUNT", styling: "NavLinx-lg-light"},
]


const AppNav = (props) => {
  let location = useLocation();
  const [navExpanded, setNavExpanded] = useState(false);
  const {firstName, lastName} = props;
  return (
    <div className="AppNav">
      <div className="container__col-6">
        <div className="LocationPanel">  
          {/* <div className="AppMenuToggle">
              <MenuIcon height='1.5rem' width='1.5rem' className={`fill-light ${navExpanded ? 'hidden' : ''}`} onClick={e => setNavExpanded(true)}/>
          </div> */}
          <div className="container__col-12">
            <div className="Breadcrumb">
              <HomeIcon height='1rem' width='1rem' className={`fill-light`} />
              <p className="NavLink-lg-light m-v-auto">{location.pathname}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container__col-6">
        <div className="NavigationPanel">
          
          <nav className="SubAppPages">
              <NavList navItems={items} styling="container__col-4 container__col-sm-4 container__col-md-3 container__col-lg-3 container__col-xl-2"/>
          </nav>

          <div className="UserProfile">
            <div className="circle m-h-auto">
              <p className="circle-initials m-v-auto">{`${firstName.charAt(0)}${lastName.charAt(0)}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  firstName: state.auth.user.firstName,
  lastName: state.auth.user.lastName
});

export default connect(mapStateToProps)(AppNav);