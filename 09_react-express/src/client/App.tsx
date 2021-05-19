import React from 'react';
import { useState, useEffect } from 'react';

const App = (props: AppProps) => {
	const [greeting, setGreeting] = useState<string>('');

	useEffect(() => {
		async function getGreeting() {
			try {
				const res = await fetch('/api/hello');
				const greeting = await res.json();
				setGreeting(greeting);
			} catch (error) {
				console.log(error);
			}
		}
		getGreeting();
	}, []);

	return (
		<main>
			<h1>Hello{greeting}</h1>
		</main>
	);
};

interface AppProps {}

export default App;
