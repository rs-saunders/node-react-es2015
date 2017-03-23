import { combineReducers } from 'redux';
import leagueData from './leagueDataReducer';
import match from './matchReducer';
import players from './playersReducer';

export default combineReducers({
    leagueData,
    match,
    players,
});
