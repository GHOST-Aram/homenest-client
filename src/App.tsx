import React from 'react';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='bg-gray-300'>
			<Header />
			<Routes>
				<Route path='/' element = {<Home />}/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
