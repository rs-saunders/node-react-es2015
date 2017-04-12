import React, {PropTypes} from 'react';
import {getLetterForIndex} from '../../utils';
import LeagueBoxRow from './LeagueBoxRow';

class LeagueBox extends React.Component {

    constructor(props) {
        super(props);

        const {leagueData} = props;

        this.initPlayerOptions = this.initPlayerOptions.bind(this);
        this.highlightMatch = this.highlightMatch.bind(this);
        this.highlightPlayer = this.highlightPlayer.bind(this);

        this.state = {
            playerOptions: this.initPlayerOptions(leagueData),
        };
    }

    initPlayerOptions(leagueData) {
        const options = {boxHighlight: false, rowHighlight: false};
        const playerOptions = new Map([...leagueData.keys()].map(player => [player, {...options}]));
        playerOptions.set('bp', {...options});
        playerOptions.set('total', {...options});

        return playerOptions;
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

        const {leagueData, selectMatch} = this.props;
        const leagueBoxRows = [];
        let i = 0;
        let scoreBoxHeaders = [];
        leagueData.forEach((scores, player) => {
            leagueBoxRows.push(<LeagueBoxRow
                key={player.id}
                index={i}
                scores={scores}
                selectMatch={selectMatch}
                highlightMatch={this.highlightMatch}
                highlightPlayer={this.highlightPlayer}
                player={player}
                playerOptions={this.state.playerOptions}
            />);
            const letter = getLetterForIndex(i);
            scoreBoxHeaders.push(<th key={player.id} className="letter-box">{letter}</th>);
            i++;
        });
        return (
            <table className="league-box">
                <thead>
                <tr>
                    <th className="name">Name</th>
                    <th className="tel hidden-sm hidden-xs">Tel 1</th>
                    <th className="tel hidden-sm hidden-xs">Tel 2</th>
                    <th className="email hidden-sm hidden-xs">Email</th>
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
    leagueData: PropTypes.instanceOf(Map).isRequired,
    selectMatch: PropTypes.func.isRequired,
};

export default LeagueBox;
