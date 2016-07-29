import React from 'react';
import { Link } from 'react-router';

class FeedsView extends React.Component {
	render() {
		return (
			<div className="single-photo">
				<h1>
					<Link to="/">picsame</Link>
				</h1>
			</div>
		)
	}
}

export default FeedsView;