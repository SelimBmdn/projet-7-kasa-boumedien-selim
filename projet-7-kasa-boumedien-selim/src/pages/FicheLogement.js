
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import datas from '../datas/data'
import { useParams , Navigate} from 'react-router-dom'


export default function Logement() {
    const {id} = useParams() 
    let logement = null
    for(let data of datas) {
        if (data.id === id) {
            logement = data
            break
        }
       
    }
    console.log(logement)
    if(!logement) {
        return <Navigate to="/404"/> 
    }
	return (
		<div className='logement'>
			<Header />
			<Banner />
		     {id}    
			<Footer />
		</div>
	)
}