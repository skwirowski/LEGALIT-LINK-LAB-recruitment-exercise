import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'routes/Home';
import Courts from 'routes/Courts';
import Schools from 'routes/Schools';
import ROUTES from 'static/routes';
import 'static/styles/styles.css';

const App: React.FC = () => {

  return (
    <div className='main-boundary-wrapper'>
      <Router>
        <Switch>
          <Route exact path={ROUTES.homepage} component={Home} />
          <Route exact path={ROUTES.courts} component={Courts} />
          <Route exact path={ROUTES.schools} component={Schools} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
