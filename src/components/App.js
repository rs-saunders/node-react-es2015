import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const App = (props) => {
    return (
        <div>
            <IndexLink to="/">League</IndexLink>
            {' | '}
            <Link to="/match">Match</Link>
            {' | '}
            <Link to="/about">About</Link>
            <br/>
            {props.children}
        </div>
    );
};

App.propTypes = {
    children: PropTypes.element
};

export default App;
