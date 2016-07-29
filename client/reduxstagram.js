import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './views/App';
import FeedsView from './views/FeedsView';
import MediaView from './views/MediaView';

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={FeedsView}></IndexRoute>
				<Route path="/view/:postId" component={MediaView}></Route>
			</Route>
		</Router>
	</Provider>, document.querySelector('#root'));