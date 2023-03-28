import '../styles/Footer.css'
import logo_footer from '../assets/logo-footer.png'
function Footer () {

    return ( 
        <div className='footer'>
            <h1>
                <img src={logo_footer} alt='Logo du site Kasa' />
            </h1>
            <p className='text_footer'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer