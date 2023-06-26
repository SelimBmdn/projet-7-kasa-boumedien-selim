// Import des fichiers CSS et des données nécessaires
import '../styles/Card.css'
import { Link } from "react-router-dom"

function Card({ location }) {
// Création de l'URL pour le lien en utilisant l'ID de la localisation
    const url = "/Logement/" + location.id
    return (
// Utilisation de la composante Link de react-router-dom pour créer un lien vers l'URL spécifiée
        <Link to={url} >
            <div className='kasa-card'>
                <img src={location.cover} alt="" />
                <h3>{location.title}</h3>

            </div>
        </Link>
    )
}

export default Card