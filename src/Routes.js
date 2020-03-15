import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import CmsPages from './components/Pages/CmsPages';

function Routes() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/pages/:slug" component={CmsPages} />
    </Router>
  )
}

export default Routes;