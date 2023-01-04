import "./css/css.css";
import Yearbox from "./yearbox";
import Event from "./Event";

import img from "./illumination.png"

function Gallery() {
  const yeargroup = [...Array(15).keys()].map((i) => 2022 - i).map(i=> <Yearbox year={i}/>)

  const eventgroup = ["Illumination", "Sports GC", "Teachers Day", "Janmashtami", "Rangoli"].map(event=><Event event={event} img={img}/>)

  return (
    <>
      <div className="leftbox">
        <span className="boxheader">Gallery</span>
        <div className="years">
          {yeargroup}
        </div>
      </div>
      <div className="rightbox">
        {eventgroup}
      </div>
    </>
  );
}

export default Gallery;
