import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submitScore } from '../actions/leagueActions';
import { Link } from 'react-router';

const mapStateToProps = (state) => {
    return {
        match: state.match,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ submitScore }, dispatch);
};

const MatchPage = ({ match }) => {
    const [player1, player2] = [...match.keys()];
    return (
        <div>
            <h1>{player1.name} vs {player2.name}</h1>
            <Link to="/">back</Link>
        </div>
    );
};

MatchPage.propTypes = {
    match: PropTypes.instanceOf(Map).isRequired,
};

MatchPage.contextTypes = {
    router: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchPage);
