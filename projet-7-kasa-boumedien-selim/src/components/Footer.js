// Import des fichiers CSS et des données nécessaires
import '../styles/Footer.css'
import logo_footer from '../assets/logo-footer.png'
function Footer () {

    return ( 
        <div className='footer'>
            {/* Affichage du logo du site Kasa */}
            <h1>
                <img src={logo_footer} alt='Logo du site Kasa' />
            </h1>
             {/* Affichage du texte de droits d'auteur */}
            <p className='text_footer'>© 2023 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer