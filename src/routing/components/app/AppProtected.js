import React from 'react';

import AppNav from './navbars/AppNav';
import AppSubNav from './subNavbars/AppSubNav';
import Display from './displays/Display';
import NotifyBanner from '../../../containers/lists/messages/NotifiyBanner';


const AppProtected = (props) => {
  return (
    <div className="AppProtected container__row">
      <AppNav/>
      <AppSubNav/>
      <NotifyBanner/>

      <Display/>
    </div>
  );
}

export default AppProtected;