import { SCORE } from '../actions/leagueActionConstants';

export default (state = new Map(), action) => {
    switch (action.type) {
        case SCORE:
            const {leagueData} = state;
            const {scoreMap} = action;
            const [player1, player2] = [...scoreMap.keys()];
            const [score1, score2] = [...scoreMap.values()];
            const newLeagueData = new Map(leagueData);
            newLeagueData.get(player1).set(player2, score1);
            newLeagueData.get(player2).set(player1, score2);
            return newLeagueData;

        default:
            return state
    }
}
