import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';

const Yearbox = (props) => {
  return (
    <div className='yearbox'>
        <FontAwesomeIcon icon={faUserGroup} className='icon' />
        <span>{props.year}</span>
    </div>
    
  )
}

export default Yearbox