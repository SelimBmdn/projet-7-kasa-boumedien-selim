import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar () {

    return ( 
        
            <ul className='nav_list'>
                <li className='btn-home'>
                    <Link to='/Home'>
                    Acceuil
                    </Link>
                </li>
                <li className='btn-about'>
                    <Link to='/About'>
                    A propos
                    </Link>
                </li>

            </ul>

       
    )
}

export default Navbar