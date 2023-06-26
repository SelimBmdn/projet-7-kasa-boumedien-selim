// Import des fichiers CSS et des données nécessaires
import '../styles/Carrousel.css'
import arrowLeft from '../assets/chevron_carousel_left.png'
import arrowRight from '../assets/chevron_carousel_right.png'
import { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import datas from '../datas/data'

function Carrousel () {
  // Récupération de l'ID de la localisation à partir des paramètres d'URL
  const { id } = useParams()

  // Utilisation de l'état local pour suivre l'index de la diapositive actuelle
  const [currentSlide, setCurrentSlide] = useState(0);
  let logement = null;
  for (let data of datas) {
  // Recherche de la localisation correspondant à l'ID
    if (data.id === id) {
      logement = data;
      break;
    }
  }
  if (!logement) {
  // Si la localisation n'est pas trouvée, rediriger vers la page 404
    return <Navigate to="/404" />;
  }

  const prevPage = () => {
    setCurrentSlide(currentSlide - 1)
    if(currentSlide === 0)
  // Si on atteint la première diapositive, passer à la dernière diapositive

        setCurrentSlide(logement.pictures.length - 1)
  };

  const nextPage = () => {
    setCurrentSlide(currentSlide + 1)
        if(currentSlide === logement.pictures.length - 1)
    // Si on atteint la dernière diapositive, passer à la première diapositive
            setCurrentSlide(0)
  };

  return (
    <div className="carousel">
      {logement.pictures && logement.pictures.length > 0 && (
        <div className="carousel-slide" >
          {/* Affichage des images de la localisation en fonction de l'index de la diapositive actuelle */}
          {logement.pictures.map((picture, index) => (
            <div key={index} className="carousel-slide-item" style={{ display: currentSlide === index ? 'block' : 'none' }}>
              <img src={picture} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      )}
      <div className="carousel-controls">
        <button className="carousel-control" onClick={prevPage}>
          {/* Bouton pour passer à la diapositive précédente */}
          <img src={arrowLeft} alt="Previous slide" />
        </button>
        <button className="carousel-control" onClick={nextPage}>
          {/* Bouton pour passer à la diapositive suivante */}
          <img src={arrowRight} alt="Next slide" />
        </button>
      </div>
    </div>
  );
}

export default Carrousel;