import '../styles/Home.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import All_cards from '../components/All_cards'
import Footer from '../components/Footer'


export default function Home() {
	return (
		<div className='home'>
			<Header />
			<Banner />
			<All_cards />           
			<Footer />
		</div>
	)
}