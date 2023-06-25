import '../styles/Card.css'
import { Link } from "react-router-dom"
/*import datas from '../datas/data'*/

function Card({ location }) {

    const url = "/Logement/" + location.id
    return (
        <Link to={url} >
            <div className='kasa-card'>
                <img src={location.cover} alt="" />
                <h3>{location.title}</h3>

            </div>
        </Link>
    )

}

export default Card