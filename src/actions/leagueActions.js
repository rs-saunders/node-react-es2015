import { SCORE, SELECT_MATCH } from './leagueActionConstants';

export const submitScore = (scoreMap) => ({ type: SCORE, scoreMap });
export const selectMatch = (players) => ({ type: SELECT_MATCH, players });
