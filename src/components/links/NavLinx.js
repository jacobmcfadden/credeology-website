import React from 'react';
import {NavLink} from 'react-router-dom';

const NavLinx = (props) => {
    const {name, where, displayText, styling} = props;

    return (
        <div className="NavLinx m-v-auto">
            <NavLink
             activeClassName="selected"
            to={where}
            name={name} 
            className={`align-text ${styling}`} >
                {displayText}
            </NavLink>
        </div>
    );
};
  
export default NavLinx;