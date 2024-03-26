import Logo from '../components/Logo'
import logo from '../images/homenest-logo-bw.png'
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className={header}>
            <div className={container}>
                <Logo src={logo}/>
                <Navbar />
            </div>
        </header>
    )
}

const header = 'p-4 pt-4 bg-blue-700'
const container = 'flex flex-col items-center gap-4 md:flex-row justify-between md:items-start gap-4'

export default Header