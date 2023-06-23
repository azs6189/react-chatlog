import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
	return (
		<div className="chat-entry local">
			<h2 className="entry-name">Replace with name of sender</h2>
			<section className="entry-bubble">
				<p>Replace with body of ChatEntry</p>
				<p className="entry-time">Replace with TimeStamp component</p>
				<button className="like">🤍</button>
			</section>
		</div>
	);
};

ChatEntry.propTypes = {
	//Fill with correct proptypes
};

export default ChatEntry;
