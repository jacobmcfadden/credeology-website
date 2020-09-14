import React from 'react';
import {connect} from 'react-redux';
import routes from './routing/routes';
import NofiyBanner from './containers/lists/messages/NotifiyBanner';

import './App.scss';

const App = (props) => {
  
  return (
    <div className="App">
      <NofiyBanner/>
      {routes}
    </div>
  );
}

export default connect(null)(App);
