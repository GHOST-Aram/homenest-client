import React from 'react';
import Header from './containers/Header';
import HeroSection from './containers/HeroSection';
import Benefits from './containers/Benefits';
import FeaturedListings from './containers/FeaturedListings';

function App() {
	return (
		<div>
			<Header />
			<main>
				<HeroSection />
				<Benefits />
				<FeaturedListings />
			</main>
		</div>
	);
}

export default App;
