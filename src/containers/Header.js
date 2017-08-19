import { connect } from 'react-redux';
import Header from '../components/Header.js';

const mapStateToProps = (state, ownProps) => {
    return {
        title: ownProps.title,
        canBack: ownProps.canBack
    }
}

export default connect(mapStateToProps)(Header);