import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
	const entries = props.entries;

	const chatComponents = entries.map((message, index) => {
		return (
			<div className="chat-log" key={index}>
				<ChatEntry
					id={message.id}
					sender={message.sender}
					body={message.body}
					timeStamp={message.timeStamp}
					liked={message.liked}
				></ChatEntry>
			</div>
		);
	});
	return chatComponents;
};

ChatLog.propTypes = {
	entries: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			sender: PropTypes.string,
			body: PropTypes.string,
			timeStamp: PropTypes.string,
			liked: PropTypes.bool,
		})
	),
};

export default ChatLog;
