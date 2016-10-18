import React, {PropTypes} from 'react';
import {getLetterForIndex} from '../utils';
import LeagueBoxRow from './LeagueBoxRow.jsx';


class LeagueBox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            leagueData: props.leagueData,
            playerOptions: props.playerOptions
        };

        this.submitScore = this.submitScore.bind(this);
        this.highlightMatch = this.highlightMatch.bind(this);
        this.highlightPlayer = this.highlightPlayer.bind(this);
    }

    submitScore(scoreMap) {
        const {leagueData} = this.state;

        const [player1, player2] = [...scoreMap.keys()];
        const [score1, score2] = [...scoreMap.values()];

        leagueData.get(player1).set(player2, score1);
        leagueData.get(player2).set(player1, score2);
        this.setState({
            leagueData
        });
    }

    highlightMatch(...players) {
        const {playerOptions} = this.state;
        playerOptions.forEach((options, player) => {
            options.rowHighlight = false;
            options.boxHighlight = (players.indexOf(player) !== -1);
        });
        this.setState({
            playerOptions
        });
    }

    highlightPlayer(playerToHighlight) {
        const {playerOptions} = this.state;
        playerOptions.forEach((options, player) => {
            options.rowHighlight = (player === playerToHighlight);
            options.boxHighlight = false;
        });
        this.setState({
            playerOptions
        });
    }

    render() {

        const {leagueData} = this.state;
        const leagueBoxRows = [];
        let i = 0;
        let scoreBoxHeaders = [];
        leagueData.forEach((scores, player) => {
            leagueBoxRows.push(<LeagueBoxRow
                key={i}
                index={i}
                scores={scores}
                submitScore={this.submitScore}
                highlightMatch={this.highlightMatch}
                highlightPlayer={this.highlightPlayer}
                player={player}
                playerOptions={this.state.playerOptions}
            />);
            const letter = getLetterForIndex(i);
            scoreBoxHeaders.push(<th key={i} className="letter-box">{letter}</th>);
            i++;
        });
        return (
            <table className="league-box">
                <thead>
                <tr>
                    <th className="name">Name</th>
                    <th className="tel">Tel 1</th>
                    <th className="tel">Tel 2</th>
                    <th className="email">Email</th>
                    <th>&nbsp;</th>
                    {scoreBoxHeaders}
                    <th className="bp-box">BP</th>
                    <th className="total-box">Total</th>
                </tr>
                </thead>
                <tbody>
                {leagueBoxRows}
                </tbody>
            </table>
        );
    }
}

LeagueBox.propTypes = {
    leagueData: React.PropTypes.instanceOf(Map)
};

export default LeagueBox;
