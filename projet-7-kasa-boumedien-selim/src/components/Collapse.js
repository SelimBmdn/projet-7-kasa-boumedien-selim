// Import des fichiers CSS et des données nécessaires
import '../styles/Collapse.css'
import arrow from '../assets/arrow.png';
import { useState } from 'react';

function Collapse({ title, content }) {
  // Utilisation de l'état local pour suivre si le contenu du Collapse est ouvert ou fermé
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    // Inversion de l'état ouvert/fermé lorsque le titre est cliqué
    setOpen(!open);
  }

  return (
    <div className={`collapse ${open ? 'open' : ''}`}>
      {/* Affichage du titre et ajout d'un gestionnaire de clic */}
      <h3 onClick={handleClick} className='collapse_title' >
        {title}
      {/* Affichage conditionnel de texte supplémentaire si le Collapse est fermé (test ouvert/fermé)*/}
        {open ? '' : ''}
       {/* Affichage de l'icône de flèche en fonction de l'état ouvert/fermé */}
        <img className={`arrow_logo ${open ? 'open' : ''}`} src={arrow} alt="show content" />
      </h3>
       {/* Affichage du contenu en fonction de l'état ouvert/fermé */}
      <div className={`collapse_content ${open ? 'open' : ''}`}>
        {content}
      </div>
    </div>
  )
}

export default Collapse;
