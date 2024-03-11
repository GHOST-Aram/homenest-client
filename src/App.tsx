import Footer from './containers/Footer';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Listings from './pages/Listings';
import PropertyDetails from './pages/PropertyDetails';
import SignUp from './pages/accounts/SignUp';
import Login from './pages/accounts/Login';
import { AuthProvider } from './utils/authContext';
import Profile from './pages/Profile';
import Header from './containers/Header';
import PropertyForm from './pages/NewProperty';

function App() {	
	return (
		<div>
			<AuthProvider>
				<Header />
				<Routes>
					<Route path='/' element = {<Home />}/>
					<Route path='/listings' element = {<Listings/>}/>
					<Route path='/listings/new' element = {<PropertyForm/>}/>
					<Route path='/listings/:id' element = {<PropertyDetails/>}/>
					<Route path='/sign-up' element ={<SignUp/>}/>
					<Route path='/login' element = {<Login />}/>
					<Route path='/profile' element = {<Profile/>}/>
				</Routes>
			</AuthProvider>
			<Footer />
		</div>
	);
}

export default App;
