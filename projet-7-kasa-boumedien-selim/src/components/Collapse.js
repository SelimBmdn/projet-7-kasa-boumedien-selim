import '../styles/Collapse.css'
import arrow from '../assets/arrow.png';
import { useState } from 'react';

function Collapse({ title, content }) {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <div className={`collapse ${open ? 'open' : ''}`}>
      <h3 onClick={handleClick} className='collapse_title' >
        {title}
        {open ? '' : ''}
        <img className={`arrow_logo ${open ? 'open' : ''}`} src={arrow} alt="show content" />
      </h3>
      <div className={`collapse_content ${open ? 'open' : ''}`}>
        {content}
      </div>
    </div>
  )
}

export default Collapse;
