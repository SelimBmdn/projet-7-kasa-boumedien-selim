import '../styles/Banner.css'

import img_banner from '../assets/img-banner.png'

function Banner () {

    return ( 
        <div className='kasa-banner'>
            <img src="{img_banner}" alt="Image banner" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner