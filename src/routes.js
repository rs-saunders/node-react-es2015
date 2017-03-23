import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import LeaguePage from './components/LeaguePage';
import AboutPage from './components/AboutPage';
import MatchPage from './components/MatchPage';
import NotFoundPage from './components/NotFoundPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={LeaguePage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="match" component={MatchPage}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);
