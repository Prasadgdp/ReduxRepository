import { combineReducers } from 'redux';
import PlayeroneReducer from './Playerone';
import PlayertwoReducer from './Playertwo';

const reducer = combineReducers({
    Argentina: PlayeroneReducer,
    Chile: PlayertwoReducer

})
export default reducer;