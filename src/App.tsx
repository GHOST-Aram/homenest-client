import React from 'react';
import Header from './containers/Header';
import HeroSection from './containers/HeroSection';
import Benefits from './containers/Benefits';

function App() {
	return (
		<div>
			<Header />
			<main>
				<HeroSection />
				<Benefits />
			</main>
		</div>
	);
}

export default App;
