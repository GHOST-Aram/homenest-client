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
import { Status } from './types';
import { useState, useEffect } from 'react';
import { getData } from './utils/fetch';

function App() {
	const [properties, setProperties] = useState<[]>([])
	const [processStatus, setProcessStatus] = useState<Status>('idle')
	
	useEffect(() =>{
	
		(async() =>{
			setProcessStatus('loading')
			const response = await getData('http://localhost:8000/properties?page=1&&limit=12')

			if(response.status === 200){
				setProcessStatus('success')
				const data = await response.json()
				setProperties(data)
			}
		})()

	},[])	
	return (
		<div>
			<AuthProvider>
				<Header />
				<Routes>
					<Route path='/' element = {
						<Home properties={properties} processStatus={processStatus}/>
					}/>
					<Route path='/listings' element = {
						<Listings properties={properties} processStatus={processStatus}/>
					}/>
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
