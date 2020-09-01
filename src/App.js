import React from 'react';
import routes from './routing/appRoutes'

import './styling/App.scss';

const App = () => {
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
