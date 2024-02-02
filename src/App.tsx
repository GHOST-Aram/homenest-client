import React from 'react';
import Header from './containers/Header';
import HeroSection from './containers/HeroSection';
import Benefits from './containers/Benefits';
import FeaturedListings from './containers/FeaturedListings';
import Testimonials from './containers/Testimonials';
import Footer from './containers/Footer';

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
			<Footer />
		</div>
	);
}

export default App;
