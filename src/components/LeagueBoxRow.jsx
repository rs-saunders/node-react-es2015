import React, {PropTypes} from 'react';
import {getLetterForIndex} from '../utils';

const LeagueBoxRow = (props) => {
    const letter = getLetterForIndex(props.index);
    const {player, submitScore, scores} = props;
    let isPlayerRow;
    let classNames = [];
    const scoreBoxes = [];
    let i = 0;

    scores.forEach((score, opponent) => {

        isPlayerRow = (i++ === props.index);

        if(isPlayerRow) {
            classNames.push('black');
            scoreBoxes.push(<td key={i++} className="score-box black">&nbsp;</td>);
        }

        classNames = ['score-box'];

        if(opponent == 'bp') {
            classNames.push('bp-box');
        }
        if(opponent == 'total') {
            classNames.push('total-box');
        }

        const scoreMap = new Map([[player, 6], [opponent, 4]]);

        scoreBoxes.push(<td key={i} className={classNames.join(' ')} onClick={() => submitScore(scoreMap)}>{score}</td>);
    });

    return (
        <tr>
            <td>{player.name}</td>
            <td>{player.tel1}</td>
            <td>{player.tel2}</td>
            <td>{player.email}</td>
            <td className="letter-box">{letter}</td>
            {scoreBoxes}
        </tr>
    );
};

export default LeagueBoxRow;
