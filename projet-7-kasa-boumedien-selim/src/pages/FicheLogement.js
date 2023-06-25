import '../styles/FicheLogement.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import datas from '../datas/data'
import { useParams, Navigate } from 'react-router-dom'
//import { useEffect, useState } from "react"
import Carrousel from '../components/Carrousel'
import Collapse from '../components/Collapse';
import greyStar from '../assets/grey_star.png';
import redStar from '../assets/red_star.png';
import { element } from 'prop-types'


export default function Logement() {

    const { id } = useParams()
    let logement = null
    for (let data of datas) {
        if (data.id === id) {
            logement = data
            break
        }
    }

    if (!logement) {
        return <Navigate to="/404" />
    }

    return (
        <div className='logement'>
            <Header />
            <Carrousel />

            <div className='allElements'>
                <div className='titleAndLocation'>
                    <h2>{logement.title}</h2>
                    <p>{logement.location}</p>


                    <div className='all_tags'>
                        {
                        logement.tags.map((element) => {
                            return(<span className='tags' key={"tags-"+element}>{element}</span>)
                        })
                        }
                    </div>

                </div>
                <div className='allNameAndStars'>
                    <div className='nameAndPp'>
                        <div className='name'>
                            {logement.host.name}
                        </div>
                        <img src={logement.host.picture} alt=""></img>
                    </div>

                    <div className='stars'>
                        {[...Array(5)].map((_star, index) => {
                            const ratingValue = index + 1;
                            return (
                                <img key={index} src={ratingValue <= logement.rating ? redStar : greyStar} alt="star" />
                            )
                        })}


                    </div>
                </div>

            </div>

            <div className='allCollapse'>
                <div className='description'>
                    <Collapse title={'Description'} content={logement.description} />
                </div>
                <div className='equipements'>
                    <Collapse title={'Equipements'} content={logement.equipments.join(" ")} />
                </div>
            </div>

            <Footer />
        </div>
    )
}

