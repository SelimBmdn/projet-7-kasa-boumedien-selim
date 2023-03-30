import '../styles/FicheLogement.css'
import Header from '../components/Header'
/*import Banner from '../components/Banner'*/
import Footer from '../components/Footer'
import datas from '../datas/data'
import { useParams, Navigate } from 'react-router-dom'
import arrowLeft from '../assets/chevron_carousel_left.png'
import arrowRight from '../assets/chevron_carousel_right.png'


export default function Logement() {


    const { id } = useParams()
    let logement = null
    for (let data of datas) {
        if (data.id === id) {
            logement = data
            break
        }
    }
    console.log(logement)
    if (!logement) {
        return <Navigate to="/404" />
    }

    return (
        <div className='logement'>
            <Header />
            <div className='cover'>
                <img src={logement.cover} className="cover_img" alt="logo"></img>
                <div className='allArrow'>
                    <img src={arrowLeft} className="arrowLeft" alt=""></img>
                    <img src={arrowRight} className="arrowRight" alt=""></img>
                </div>

            </div>

            <div className='titleAndLocation'>
                <h2>{logement.title}</h2>
                <p>{logement.location}</p>
                <div className='tags'>
                {logement.tags}
            </div>
            </div>

            <div className='nameAndPp'>
                {logement.host.name}
                <img src={logement.host.picture} alt=""></img>
            </div>

            <div className='stars'>

            </div>

            <div className='description'>

            </div>
            <div className='equipements'>

            </div>

            <Footer />
        </div>
    )
}

