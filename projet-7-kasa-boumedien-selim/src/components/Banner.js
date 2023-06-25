import '../styles/Banner.css'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Banner() {

	const [aboutPage, setAboutPage] = useState(false);

	const location = useLocation();

	useEffect(() => {
		if (location.pathname === '/about') {
			setAboutPage(true)
		};
		// eslint-disable-next-line
	}, [])

	return (
		<section className={aboutPage ? 'banner_about' : 'banner'}>
			{!aboutPage && <p>Chez vous, partout et ailleurs</p>}
		</section>
	)
}

export default Banner