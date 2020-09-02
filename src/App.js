import React from 'react';


import './styling/App.scss';
import routes from './routing/routes';

const App = (props) => {

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
