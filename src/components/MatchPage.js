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

    //TODO: use value or defaultValue on select rathen than selected on option
    const SelectOptions = (players, selected ) => players.map((player, index) =>
        <option key={player.id} value={ index } selected={player.name === selected}>{ player.name }</option>
    );

    return (
        <div className="container">
            <form>
                <legend>League Match</legend>
                <div className="form-group col-md-4">
                    <label className="control-label" htmlFor="player1">Player1</label>
                    <select id="player1" name="player1" className="form-control">
                        <option>Please select...</option>
                        { SelectOptions(players, player1.name) }
                    </select>
                </div>
                <div className="form-group col-md-4">
                    <label className="control-label" htmlFor="score">Vs</label>
                    <select id="score" name="score" className="form-control">
                        <optgroup label="Win - Lose">
                        <option value="2">7 - 1</option>
                        <option value="2">6 - 2</option>
                        <option value="3">6 - 4</option>
                        </optgroup>
                        <optgroup label="Lose - Win">
                            <option value="1">4 - 6</option>
                            <option value="1">2 - 6</option>
                            <option value="1">1 - 7</option>
                        </optgroup>
                    </select>
                </div>
                <div className="form-group col-md-4">
                    <label className="control-label" htmlFor="player2">Player2</label>
                    <select id="player2" name="player2" className="form-control">
                        <option>Please select...</option>
                        { SelectOptions(players, player2.name) }
                    </select>
                </div>
                <div className="form-group">
                    <button id="submit" name="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

const MatchPage = ({ match, players, submitScore }) => {
    const [player1, player2] = [...match.keys()];
    return (
        <div className="container">
            { player1.name && player2.name &&
                <h1>{player1.name} vs {player2.name}</h1>
            }
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
