import { connect } from 'react-redux';
import Home from '../components/Home.js';
import { requestTopics } from '../redux/actions.js';

const mapStateToProps = (state, ownProps) => {
    console.log('-----------state-----------');
    console.log(state);
    return {
        topics: state.topics
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchTopics: (tab) => {
            let test = requestTopics(tab);
            console.log('------test------');
            console.log(test);
            dispatch(requestTopics(tab));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);