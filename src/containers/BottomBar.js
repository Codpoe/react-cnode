import { connect } from 'react-redux'
import BottomBar from '../components/BottomBar.js';

const mapStateToProps = (state, ownProps) => {
    return {
        tabs: ownProps.tabs
    }
};

export default connect(mapStateToProps)(BottomBar);

