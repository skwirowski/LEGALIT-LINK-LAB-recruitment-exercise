import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import fetchCourts from 'redux/thunk/courtsThunk';
import fetchSchools from 'redux/thunk/schoolsThunk';
import Home from 'routes/Home';
import Courts from 'routes/Courts';
import Schools from 'routes/Schools';
import ROUTES from 'static/routes';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  useEffect(() => {
    // dispatch(fetchCourts());
    // dispatch(fetchSchools());
  }, [dispatch]);

  console.log(data);

  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.homepage} component={Home} />
        <Route exact path={ROUTES.courts} component={Courts} />
        <Route exact path={ROUTES.schools} component={Schools} />
      </Switch>
    </Router>
  );
}

export default App;
