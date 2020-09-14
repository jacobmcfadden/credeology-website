import React from 'react';
import NavList from '../../../lists/horizontal/NavList';

const items = [
  // { name : "addNewOrganization", where : "/app", display: "Add Organization", styling: "NavLinx-lg-light"},
]

const AppSubNav = (props) => {
  return (
    <div className="AppSubNav">
      <div className='container__col-12'>
        <nav className="SubAppPages">
            <NavList navItems={items}/>
        </nav>            
      </div>
    </div>
  );
}

export default AppSubNav;