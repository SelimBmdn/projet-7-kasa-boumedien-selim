// Import des fichiers CSS et des données nécessaires
import '../styles/ErrorPage.css'
import Header from '../components/Header'
import { Link } from 'react-router-dom';

function ErrorPage () {

    return ( 
        
        <div className='page_error_kasa'>
        {/* Inclusion du composant Header */}
        <Header />
        <div className='error_infos'>
            <h2 className='error_infos_title'>404</h2>
            <p className='infos_content'>Oups, La page que vous recherchez n'existe pas.</p>
        </div>
        {/* Lien pour retourner sur la page d'accueil */}
            <Link className='return_home' to='/home'>Retourner sur la page d'accueil</Link> 
    </div>
    )
}

export default ErrorPage