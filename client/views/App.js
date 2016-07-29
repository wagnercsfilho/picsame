import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionsCreators from '../actions/actionsCreators';

import MainView from './MainView'

function mapStateToProps(state) {
	return {
		posts: state.posts,
		comments: state.comments
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionsCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(MainView);

export default App;