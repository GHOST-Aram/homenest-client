import Footer from './containers/Footer';
import Home from './apps/home/Page';
import { Routes, Route } from 'react-router-dom';
import Listings from './apps/properties/listings/Page';
import PropertyDetails from './apps/property-details/Page';
import SignUp from './apps/sign-up/Page';
import Login from './apps/login/Page';
import { AuthProvider } from './utils/authContext';
import Profile from './apps/profile/Page';
import Header from './containers/Header';
import NewProperty from './apps/properties/property-input/CreateProperty'
import usePropertyData from './utils/useData';
import LandLordsProperties from './apps/landlords-listings/Page';
import PropertyEditor from './apps/properties/property-input/EditProperty';

function App() {
	const {processStatus, properties } = usePropertyData()

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
					<Route path='/listings/new' element = {<NewProperty/>}/>
                    <Route path='/listings/:id/update' element={<PropertyEditor/>}/>
					<Route path='/listings/landlords/:id' element = {
						<LandLordsProperties/>
					}/>
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
