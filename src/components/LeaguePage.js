import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectMatch } from '../actions/leagueActions';
import LeagueBox from './LeagueBox/LeagueBox';

const mapStateToProps = (state) => {
    return {
        leagueData: state.leagueData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectMatch }, dispatch);
};

const LeaguePage = ({ leagueData, selectMatch: dispatchSelectMatch }, context) => {

    const selectMatch = (players) => {
        dispatchSelectMatch(players);
        context.router.push('/match');
    };

    return (
        <div className="container">
            <h1>League Standings</h1>
            <LeagueBox leagueData={leagueData} selectMatch={selectMatch} />
        </div>
    );
};

LeaguePage.propTypes = {
    leagueData: PropTypes.instanceOf(Map).isRequired,
    selectMatch: PropTypes.func.isRequired,
};

LeaguePage.contextTypes = {
    router: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(LeaguePage);
