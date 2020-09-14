import React from 'react'
import NavLinx from '../../../components/links/NavLinx';

const NavList = (props) => {
    const {navItems, listStyling} = props;

    return (
      <div className="NavList container__row justify-end">  
          {navItems.map((item, index) => {
            return (
              <div key={index} className={`${listStyling} align-text`}>
                <NavLinx 
                name={item.name}
                where={item.where}
                displayText={item.display}
                styling={item.styling}
                />
              </div>
            );
          })} 
      </div>
    );
}

export default NavList;