import { combineReducers } from 'redux';
import { REQUEST_TOPICS, RECEIVE_TOPICS } from './actions.js';

const topics = (state = {currentPage: 1, topics: []}, action) => {
    switch (action.type) {
        case REQUEST_TOPICS:
            return state;
        case RECEIVE_TOPICS:
            return Object.assign({}, state, {
                currentPage: action.currentPage,
                list: [
                    ...state.topics,
                    action.topics
                ]
            });
        default:
            return state
    }
};

const rootReducer = combineReducers({
    topics
});

export default rootReducer;


