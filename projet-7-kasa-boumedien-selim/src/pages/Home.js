// Import des fichiers CSS et des données nécessaires
import '../styles/Home.css'
//import '../styles/normalize.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import All_cards from '../components/All_cards'
import Footer from '../components/Footer'
import "../styles/Banner.css"

export default function Home() {
	return (
		<div className='home'>
			 {/* Inclusion du composant Header */}
			<Header />
			{/* Inclusion du composant Banner */}
			<Banner>
				<div className='banner'></div>
			</Banner>
			 {/* Inclusion du composant All_cards */}
			<All_cards />  
			{/* Inclusion du composant Footer */}         
			<Footer />
		</div>
	)
}