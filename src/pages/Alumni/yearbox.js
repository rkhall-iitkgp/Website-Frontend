import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretDown
} from "@fortawesome/free-solid-svg-icons";


const Yearbox = (props) => {
    return (
        <div className={`year-box ${props.selected === true ? "active" : ""}`} onClick={() => props.handleClick(props.year)}>
            <span >{props.year}</span>
            <FontAwesomeIcon icon={faCaretDown} className="dropdown" />
        </div>

    )
}

export default Yearbox