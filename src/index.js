import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import initialState from './store/initialState';

import './stylesheets/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

let store = configureStore(initialState);

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
