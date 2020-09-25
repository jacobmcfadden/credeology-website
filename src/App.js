import React from 'react';
import {connect} from 'react-redux';
import routes from './routing/routes';
import ActionConsole from './containers/sections/ActionConsole/ActionConsole';

import './App.scss';

const App = (props) => {
  
  return (
    <div className="App">
      <ActionConsole/>
      {routes}
    </div>
  );
}

export default connect(null)(App);
