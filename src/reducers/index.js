import { combineReducers } from 'redux';
import { ADD_NEW, GET_DATA } from '../actionCreators/types';

const getData = (state = [] , action) => {
    switch(action.type) {
        case GET_DATA:
            return action.payload
        case ADD_NEW:
            return [ ...state, action.payload.data]
        default:
            return state
    }
}

export default combineReducers({
    users: getData
});