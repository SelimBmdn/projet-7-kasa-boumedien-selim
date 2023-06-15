import '../styles/Carrousel.css'
import arrowLeft from '../assets/chevron_carousel_left.png'
import arrowRight from '../assets/chevron_carousel_right.png'
import { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import datas from '../datas/data'

function Carrousel () {
  const { id } = useParams()
  const [currentSlide, setCurrentSlide] = useState(0);
  let logement = null;
  for (let data of datas) {
    if (data.id === id) {
      logement = data;
      break;
    }
  }
  if (!logement) {
    return <Navigate to="/404" />;
  }

  const prevPage = () => {
    setCurrentSlide(currentSlide - 1)
    if(currentSlide === 0)
        setCurrentSlide(logement.pictures.length - 1)
  };

  const nextPage = () => {
    setCurrentSlide(currentSlide + 1)
        if(currentSlide === logement.pictures.length - 1)
            setCurrentSlide(0)
  };

  return (
    <div className="carousel">
      {logement.pictures && logement.pictures.length > 0 && (
        <div className="carousel-slide" /*style={{ transform: `translateX(-${currentSlide * 100}%)` }}*/>
          {logement.pictures.map((picture, index) => (
            <div key={index} className="carousel-slide-item" style={{ display: currentSlide === index ? 'block' : 'none' }}>
              <img src={picture} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      )}
      <div className="carousel-controls">
        <button className="carousel-control" onClick={prevPage}>
          <img src={arrowLeft} alt="Previous slide" />
        </button>
        <button className="carousel-control" onClick={nextPage}>
          <img src={arrowRight} alt="Next slide" />
        </button>
      </div>
    </div>
  );
}

export default Carrousel;