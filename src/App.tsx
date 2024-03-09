import Header from './containers/Header';
import Footer from './containers/Footer';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Listings from './pages/Listings';
import PropertyDetails from './pages/PropertyDetails';
import SignUp from './pages/accounts/SignUp';

function App() {
	return (
		<div className='bg-gray-300'>
			<Routes>
				<Route path='/' element = {<Home />}/>
				<Route path='/listings' element = {<Listings/>}/>
				<Route path='/listings/:id' element = {<PropertyDetails/>}/>
				<Route path='/details' element = {<PropertyDetails/>}/>
				<Route path='/sign-up' element ={<SignUp/>}/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
