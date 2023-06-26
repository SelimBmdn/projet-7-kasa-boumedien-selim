import '../styles/Header.css'
import logo from '../assets/logo-kasa.png'
import Navbar from '../components/Navbar'

function Header () {

    return (   
        <header className='kasa-header'>
            <h1>
                <img src={logo} alt='Logo du site Kasa' />
            </h1>
           <Navbar />          
        </header>   
    )
}
export default Header