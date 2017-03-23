import { createStore } from 'redux';
import rootReducer from '../reducers';

const reduxDevtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default (initialState) => {
    return createStore(rootReducer, initialState, reduxDevtoolsExtension);
};
