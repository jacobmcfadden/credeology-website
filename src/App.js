import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {getUser} from './redux/reducers/authReducer';

import './styling/App.scss';
import routes from './routing/routes';

const App = (props) => {
  useEffect(() => {
    props.getUser()
    return function cleanup() {
      props.getUser()
    }
});

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default connect(null, {getUser})(App);
