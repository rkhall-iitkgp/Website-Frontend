import React from 'react'

const Event = (props) => {
  return (
    <div className='event' style={{ backgroundImage: `url(${props.img})` }} >
        {/* <img src={img} /> */}
        <span>{props.event}</span>
    </div>
  )
}

export default Event