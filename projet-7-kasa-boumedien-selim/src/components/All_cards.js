// Import des fichiers CSS et des données nécessaires
import '../styles/All_cards.css'
import datas from '../datas/data'
import Card from '../components/Card'

function All_cards() {
    // Utilisation de la méthode map pour créer une liste de composants Card en fonction des données
    const cardList = datas.map((location) =>
        <Card key={location.id} location={location} />
    )

    return (
        <div className='all_cards'>
            {cardList}
        </div>
    )
}
export default All_cards

