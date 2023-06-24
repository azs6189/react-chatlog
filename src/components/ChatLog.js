import React from 'react';
import ChatEntry from './ChatEntry';
// import chatMessages from '../data/messages.json';

const ChatLog = () => {
	const chatMessages = [
		{
			id: 1,
			sender: 'Vladimir',
			body: 'why are you arguing with me',
			timeStamp: '2018-05-29T22:49:06+00:00',
			liked: false,
		},
		{
			id: 2,
			sender: 'Estragon',
			body: 'Because you are wrong.',
			timeStamp: '2018-05-29T22:49:33+00:00',
			liked: false,
		},
		{
			id: 3,
			sender: 'Vladimir',
			body: 'because I am what',
			timeStamp: '2018-05-29T22:50:22+00:00',
			liked: false,
		},
		{
			id: 4,
			sender: 'Estragon',
			body: 'A robot.',
			timeStamp: '2018-05-29T22:52:21+00:00',
			liked: false,
		},
		{
			id: 5,
			sender: 'Vladimir',
			body: 'Notabot',
			timeStamp: '2019-07-23T22:52:21+00:00',
			liked: false,
		},
	];

	const chatComponents = chatMessages.map((message) => {
		return (
			<ChatEntry
				sender={message.sender}
				body={message.body}
				timeStamp={message.timeStamp}
			></ChatEntry>
		);
	});
	return chatComponents;
};

export default ChatLog;
