import { SELECT_MATCH } from '../actions/leagueActionConstants';

export default (state = new Map(), action) => {
    switch (action.type) {
    case SELECT_MATCH: {
        const {players} = action;
        return new Map(players.map(player => [player, null]));
    }
    default:
        return state;
    }
};
