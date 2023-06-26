// Import des fichiers CSS et des données nécessaires
import '../styles/Banner.css'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Banner() {
  // Utilisation de l'état local pour suivre si la page "About" est active
	const [aboutPage, setAboutPage] = useState(false);
  // Utilisation du hook useLocation pour obtenir l'objet location de la route actuelle
	const location = useLocation();

	useEffect(() => {
		// Vérification de l'emplacement de la route actuelle pour déterminer si c'est la page "About"
		if (location.pathname === '/About') {
			setAboutPage(true)
		}
		// eslint-disable-next-line
	}, [])

	return (
		// Utilisation de la classe CSS 'banner_about' si aboutPage est vrai, sinon 'banner'
		<section className={aboutPage ? 'banner_about' : 'banner'}>
			{!aboutPage && <p>Chez vous, partout et ailleurs</p>}
		</section>
	)
}

export default Banner