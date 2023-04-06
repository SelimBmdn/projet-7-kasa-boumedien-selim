import '../styles/Collapse.css'
import arrow from '../assets/arrow.png';
import { useState } from 'react';

function Collapse ({title, content}) {
    const [open, setOpen] = useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    }
  
    return ( 
      <div className={`collapse ${open ? 'open' : ''}`}>
        <h3 onClick={handleClick} className='collapse_title' >
          {title}
          {open ? 'ouvert' : 'fermé'}
          <img className={`arrow_logo ${open ? 'open' : ''}`} src={arrow} alt="show content" />
        </h3>
        <div className={`collapse_content ${open ? 'open' : ''}`}>
          {content}
        </div>
      </div>
    );
  }
  
  export default Collapse;

/*function Collapse ({title, content}) {
    const [open, setOpen] = useState(true)
    let containerClass = "collapse"
    if (open) {
        containerClass += " open "
    }
    return ( 
        <div className={containerClass}>
             
                <h3 onClick={() => setOpen(!open)} className='collapse_title' >
                    {title}
                    {open ? "ouvert" : "fermer"}
                    <img 
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

export default Collapse*/