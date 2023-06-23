import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import TimeStamp from './components/TimeStamp'
// {
//     "id": 1,
//     "sender":"Vladimir",
//     "body":"why are you arguing with me",
//     "timeStamp":"2018-05-29T22:49:06+00:00",
//     "liked": false
//   },

const App = () => {
	return (
		<div id="App">
			<header>
				<h1>Application title</h1>
			</header>
			<main>
				{/* Wave 01: Render one ChatEntry component */}
				<ChatEntry
					sender='Vladimir'
					body='Why are you arguing with me'
					timeStamp='2018-05-29T22:49:06+00:00'
				></ChatEntry>

				{/* Wave 02: Render ChatLog component */}
			</main>
		</div>
	);
};

export default App;
