import React from 'react';
import { Link } from 'react-router';

class MediaView extends React.Component {
	render() {
		return (
			<div class="single-photo">
				<h1>
					<Link to="/">picsame</Link>
				</h1>
			</div>
		)
	}
}

export default MediaView;