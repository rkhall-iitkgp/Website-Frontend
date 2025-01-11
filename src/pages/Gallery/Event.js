import React from 'react'
import styles from "./css/gallery.module.css";

const Event = (props) => {
  return (
    <div onClick={() => props.handleEventClick(props.id)} className={styles.event} style={{ backgroundImage: `url(${props.img})` }} >
        <span>{props.event}</span>
    </div>
  )
}

export default Event