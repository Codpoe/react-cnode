export const REQUEST_TOPICS = 'REQUEST_TOPICS';
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';

export const requestTopics = (tab) => {
    return {
        type: REQUEST_TOPICS,
        tab: tab
    }
}

export const receiveTopics = (topics, currentPage) => {
    return {
        type: RECEIVE_TOPICS,
        topics: topics,
        currentPage: currentPage
    }
}

