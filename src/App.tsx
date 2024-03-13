import Footer from './containers/universal/Footer';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Listings from './pages/Listings';
import PropertyDetails from './pages/PropertyDetails';
import SignUp from './pages/accounts/SignUp';
import Login from './pages/accounts/Login';
import { AuthProvider } from './utils/authContext';
import Profile from './pages/Profile';
import Header from './containers/universal/Header';
import PropertyForm from './pages/NewProperty';
import usePropertyData from './utils/useData';
import LandLordsProperties from './pages/LandLordsProperties';
import PropertyEditor from './pages/ProperyEditor';
import AdvancedSearch from './advanced-search/AdvancedSearch';

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
					<Route path='/search' element={<AdvancedSearch/>}/>
					<Route path='/listings' element = {
						<Listings properties={properties} processStatus={processStatus}/>
					}/>
					<Route path='/listings/new' element = {<PropertyForm/>}/>
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
