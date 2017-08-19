import {
    REQUEST_TOPICS,
    RECEIVE_TOPICS,
    receiveTopics
} from './actions.js';
import { ajax } from 'rxjs/observable/dom/ajax';
import { combineEpics } from 'redux-observable';
import 'rxjs';

const fetchTopicsEpic = (action$, store) => 
    action$.ofType(REQUEST_TOPICS)
        .mergeMap((action) => {
            let tab = action.tab ? action.tab : '';
            let currentPage = store.getState().currentPage;
            let page = currentPage ? currentPage + 1 : 1;
            return ajax.getJSON(`https://cnodejs.org/api/v1/topics?&page=${page}&limit=10`)
                .map(response => receiveTopics(response.data, page));
        });

export default combineEpics(
    fetchTopicsEpic
);

