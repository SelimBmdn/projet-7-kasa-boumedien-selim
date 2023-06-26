// Import des fichiers CSS et des données nécessaires
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar () {

    return (    
            <ul className='nav_list'>
                {/* Lien vers la page d'accueil */}
                <li className='btn-home'>
                    <Link to='/Home'>
                    Acceuil
                    </Link>
                </li>
                 {/* Lien vers la page "À propos" */}
                <li className='btn-about'>
                    <Link to='/About'>
                    A propos
                    </Link>
                </li>
            </ul>
    )
}

export default Navbar