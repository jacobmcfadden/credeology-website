import React from 'react';

import AppNav from './appNav/AppNav';
import AppSubNav from './appSubNav/AppSubNav';
import Display from './display/Display';


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