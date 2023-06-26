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
			<Header />
			<Banner>
				<div className='banner'></div>
			</Banner>
			<All_cards />           
			<Footer />
		</div>
	)
}