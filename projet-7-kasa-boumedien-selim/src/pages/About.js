// Import des fichiers CSS et des données nécessaires
import '../styles/About.css'
import Collapse from '../components/Collapse';
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

function About() {
// Données pour les collapses
    const aboutDatas = [
        {
            "id": "1",
            "title": "Fiabilité",
            "content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
            "id": "2",
            "title": "Respect",
            "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.."
        },
        {
            "id": "3",
            "title": "Service",
            "content": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.."
        },
        {
            "id": "4",
            "title": "Sécurité",
            "content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ]


    return (
        <div className='page_about_kasa'>
            {/* Inclusion du composant Header */}
            <Header />
            <Banner>
                <div className='banner_about'></div>
            </Banner>

            <main className='about_main'>
                {/* Boucle pour afficher chaque collapse */}
                {aboutDatas.map(data => {
                    return (
                        <div key={data.id} className="about_main_collapse">
                {/* Inclusion du composant Collapse avec les données correspondantes */}
                            <Collapse title={data.title} content={data.content} />
                        </div>
                    )
                }
                )
                }
            </main>
             {/* Inclusion du composant Footer */}
            <Footer />
        </div>
    )
}

export default About