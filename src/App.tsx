import React from 'react';
import Header from './containers/Header';
import HeroSection from './containers/HeroSection';
import Benefits from './containers/Benefits';
import FeaturedListings from './containers/FeaturedListings';
import Testimonials from './containers/Testimonials';

function App() {
	return (
		<div>
			<Header />
			<main>
				<HeroSection />
				<Benefits />
				<FeaturedListings />
				<Testimonials />
			</main>
		</div>
	);
}

export default App;
