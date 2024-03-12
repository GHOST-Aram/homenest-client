import Logo from '../../components/Logo'
import logo from '../images/homenest-logo-bw.png'
import MenuButton from '../../components/MenuButton';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className=' p-4 pt-4 bg-blue-700 space-y-4'
        >
            <div className='flex flex-row justify-between items-start gap-4'>
                <MenuButton />
                <Logo src={logo}/>
                <Navbar />
            </div>
        </header>
    )
}

export default Header