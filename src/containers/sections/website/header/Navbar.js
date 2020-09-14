import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import CredeologyLogo from '../../../../assets/logo/CredeologyLogo';
import FormButton from '../../../../components/buttons/FormButton';
import NavList from '../../../../containers/lists/horizontal/NavList';
import CloseIcon from '../../../../assets/icons/system/CloseIcon';
import MenuIcon from '../../../../assets/icons/system/MenuIcon';

const Navbar = (props) => {

const items = [
  { name : "products", where : "/#products", display: "PRODUCTS", styling: "NavLinx-lg-light"},
  { name : "features", where : "/#features", display: "features", styling: "NavLinx-lg-light"},
  { name : "solutions", where : "/#solutions", display: "solutions", styling: "NavLinx-lg-light"},
  { name : "pricing", where : "/#pricing", display: "pricing", styling: "NavLinx-lg-light"},
  { name : "contactUs", where : "/#contactus", display: "contact us", styling: "NavLinx-lg-light"}
]

const [navExpanded, setNavExpanded] = useState(false);

  return (
    <div className="Navbar">
      <div className="container__row">
        <div className={`${navExpanded ? 'container__col-12' : 'container__col-12 container__col-sm-5 container__col-md-4 container__col-lg-3'} container__col-xl-2`}>
          <CredeologyLogo/> 
        </div>
        <div className={`container__row container__col-xl-10 justify-evenly ${navExpanded ? '' : 'hidden-xl-down'}`}>
          <div className="container__col-12 container__col-xl-7 container__col-xl-offset-2">
            <NavList navItems={items} listStyling="container__col-12 container__col-xl-2 m-v-1"/>
          </div>
          <Link to="/auth" className="container__col-12 container__col-xl-1 m-v-auto">
            <FormButton 
                name="login" 
                disable={true}
                goalMet={false}
                displayText={'Login'}
                styling={'btn-std-md-blue m-v-1'}
                handleClick={() => {}}
            />
          </Link>
          <Link to="/auth/signup" className="container__col-12 container__col-xl-1 m-v-auto">
            <FormButton 
                name="login" 
                disable={true}
                goalMet={false}
                displayText={'Signup'}
                styling={'btn-frm-md-light m-v-1'}
                handleClick={() => {}}
            />
          </Link>
        </div>
        <div className={`${navExpanded ? 'container__col-12' : 'container__col-12 container__col-sm-2 container__col-sm-offset-5 container__col-md-1 container__col-md-offset-7 container__col-lg-offset-8'} hidden-xl-up`}>
          <div className="flex justify-center m-v-1">
            <div className="container_row">
              <CloseIcon className={`fill-light ${navExpanded ? 'show' : 'hidden'}`} onClick={e => setNavExpanded(false)}/>
              <MenuIcon className={`fill-light ${navExpanded ? 'hidden' : 'show'}`} onClick={e => setNavExpanded(true)}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;