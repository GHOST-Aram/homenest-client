import React from 'react';
import Header from './containers/Header';
import HeroSection from './containers/HeroSection';
import Benefits from './containers/Benefits';
import FeaturedListings from './containers/FeaturedListings';
import TenantReviews from './containers/TenantReviews';
import Footer from './containers/Footer';

function App() {
	return (
		<div className='bg-gray-300'>
			<Header />
			<main>
				<HeroSection />
				<Benefits />
				<FeaturedListings />
				<TenantReviews />
			</main>
			<Footer />
		</div>
	);
}

export default App;
