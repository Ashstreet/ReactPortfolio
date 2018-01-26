import React from 'react';
import { Router, Route } from 'react-router';

import Home from './pages/Homepage';
import Work from './pages/Workpage';
import Contact from './pages/Contact';
import Library from './pages/Componentpage';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Home} />
    <Route path="/Work" component={Work} />
    <Route path="/Library" component={Library} />
    <Route path="/Contact" component={Contact} />
  </Router>
);

export default Routes;
