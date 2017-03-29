import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submitScore } from '../actions/leagueActions';
import { Link } from 'react-router';

const mapStateToProps = (state) => {
    return {
        match: state.match,
        players: state.players,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ submitScore }, dispatch);
};

const MatchForm = ({ players, match, submitScore }) => {

    const [player1, player2] = [...match.keys()];

    const SelectOptions = (players, selected ) => players.map((player, index) => {
        return  (
            <option value={ index } selected={player.name === selected}>{ player.name }</option>
        );
    });


    return (
        <form className="form-horizontal">
            <fieldset>

                <legend>League Match</legend>

                <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="player1">Player1</label>
                    <div className="col-md-4">
                        <select id="player1" name="player1" className="form-control">
                            { SelectOptions(players, player1.name) }
                        </select>
                    </div>
                    <div className="col-md-1">
                        <select id="score1" name="score2" className="form-control">
                            <option value="3">Won - 3</option>
                            <option value="2">Lost - 2</option>
                            <option value="1">Lost - 1</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="player2">Player2</label>
                    <div className="col-md-4">
                        <select id="player2" name="player2" className="form-control">
                            { SelectOptions(players, player2.name) }
                        </select>
                    </div>
                    <div className="col-md-1">
                        <select id="score2" name="score2" className="form-control">
                            <option value="3">Won - 3</option>
                            <option value="2">Lost - 2</option>
                            <option value="1">Lost - 1</option>
                        </select>
                    </div>
                </div>


                <div className="form-group">
                    <div className="col-md-4">
                        <button id="submit" name="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>

            </fieldset>
        </form>
    );
};

const MatchPage = ({ match, players, submitScore }) => {
    const [player1, player2] = [...match.keys()];
    return (
        <div>
            <h1>{player1.name} vs {player2.name}</h1>
            <MatchForm match={match} players={players} submitScore={submitScore} />
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
