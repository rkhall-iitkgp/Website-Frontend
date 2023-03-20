import React from 'react'
import styleGal from "../Galllery/css/gallery.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretDown
} from "@fortawesome/free-solid-svg-icons";


const Yearbox = (props) => {
    return (
        <div className={`${styleGal.yearBox} ${props.selected === true ? `${styleGal.active}` : ""}`} onClick={() => props.handleClick(props.year)}>
            <span >{props.year}</span>
            <FontAwesomeIcon icon={faCaretDown} className={styleGal.dropdown} />
        </div>

    )
}

export default Yearbox