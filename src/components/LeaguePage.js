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

const League = ({ leagueData, selectMatch }) => {
    return (
        <div>
            <h1>League Standings</h1>
            <LeagueBox leagueData={leagueData} selectMatch={selectMatch} />
        </div>
    );
};

LeagueBox.propTypes = {
    leagueData: PropTypes.instanceOf(Map).isRequired,
    selectMatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(League);
