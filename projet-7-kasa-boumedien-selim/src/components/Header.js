// Import des fichiers CSS et des données nécessaires
import '../styles/Header.css'
import logo from '../assets/logo-kasa.png'
import Navbar from '../components/Navbar'

function Header () {

    return (   
        <header className='kasa-header'>
            {/* Affichage du logo du site Kasa */}
            <h1>
                <img src={logo} alt='Logo du site Kasa' />
            </h1>
            {/* Inclusion du composant Navbar */}
           <Navbar />          
        </header>   
    )
}
export default Header