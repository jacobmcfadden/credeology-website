import React from 'react';

import AppNav from '../../../containers/sections/app/navbars/AppNav';
import AppSubNav from '../../../containers/sections/app/subNavbars/AppSubNav';
import Display from '../../../containers/sections/app/displays/Display';

const AppProtected = (props) => {
  return (
    <div className="AppProtected">
      <AppNav/>
      <AppSubNav/>
      <Display/>
    </div>
  );
}

export default AppProtected;