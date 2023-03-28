import '../styles/Collapse.css'
import arrow from '../assets/arrow.png';
import { useState } from 'react';

function Collapse ({title, content}) {
    const [open, setOpen] = useState(true)
    let containerClass = "collapse"
    if (open) {
        containerClass += " open "
    }
    return ( 
        <div className={containerClass}>
             
                <h3 className='collapse_title' >
                    {title}
                    {open ? "ouvert" : "fermer"}
                    <img onClick={() => setOpen(!open)}
                        className="arrow_logo"
                        src={arrow} 
                        alt="show content" 
                    />
                </h3>
                <div className='collapse_content'>
                    {content}
                </div>
        </div>
    )
}

export default Collapse