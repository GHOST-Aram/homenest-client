import React from 'react';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Listings from './pages/Listings';
import PropertyDetails from './pages/PropertyDetails';

function App() {
	return (
		<div className='bg-gray-300'>
			<Header />
			<Routes>
				<Route path='/' element = {<Home />}/>
				<Route path='/listings' element = {<Listings/>}/>
				<Route path='/listings/:id' element = {<PropertyDetails/>}/>
				<Route path='/details' element = {<PropertyDetails/>}/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
