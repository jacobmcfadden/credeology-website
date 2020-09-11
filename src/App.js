import React from 'react';
import {connect} from 'react-redux';
import routes from './routing/routes';

import './styling/App.scss';

const App = (props) => {
  
  return (
    <div className="App container--fluid section-dark">
      {routes}
    </div>
  );
}

export default connect(null)(App);
