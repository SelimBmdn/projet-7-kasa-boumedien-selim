import '../styles/Card.css'

function Card ({location}) 

{
    
    return  ( 
        <div className='kasa-card'>
            <img src="" alt="Image card "/>
            <h3>{location.title}</h3>
            <p>{location.description}</p>
        </div>
    )

}

export default Card