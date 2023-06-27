import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
	const [likesCount, setLikesCount] = useState(0);

	const increaseLikes = () => {
		setLikesCount(likesCount + 1);
	};

	return (
		<div id="App">
			<header>
				<h1>Allie's Chat App</h1>
				<section className="black" id="heartWidget">
					{/* {increaseLikes} ❤️s */}
					❤️s
				</section>
			</header>

			<main>
				{/* Wave 01: Render one ChatEntry component */}

				{/* Wave 02: Render ChatLog component */}

				<ChatLog entries={chatMessages}></ChatLog>
			</main>
		</div>
	);
};

export default App;
