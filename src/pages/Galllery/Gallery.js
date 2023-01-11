import "./css/gallery.css";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Yearbox from "./yearbox";
import Event from "./Event";

import img1 from "./illumination.png";
import img2 from "./gc.png";
import img3 from "./teachersday.png";
import img4 from "./janmashtami.png";

function Gallery() {
  window.scrollTo(0, 0);

  const [year, setYear] = useState(2022);
  const [yearmenu, setYearmenu] = useState(false);

  function handleClick(year) {
    setYear(year);
    setYearmenu((prev) => !prev);
  }

  const yeargroup = [...Array(15).keys()]
    .map((i) => 2022 - i)
    .map((i) => (
      <Yearbox year={i} selected={year === i} handleClick={handleClick} />
    ));

  const mobileyeargroup = [...Array(15).keys()]
    .map((i) => 2022 - i)
    .map(
      (i) =>
        year !== i && (
          <Yearbox year={i} selected={year === i} handleClick={handleClick} />
        )
    );

  const eventgroup = [
    "Illumination & Rangoli",
    "General Championship",
    "Teachers Day",
    "Intra-hall Events",
    "Other Events",
  ].map((event) => <Event event={event} img={img1} />);

  return (
    <div className="gallerypage">
      <div className="navbar">
        <Navbar />
      </div>
      <div className={`leftbox ${yearmenu?"active":""}`}>
        <span className="boxheader">Gallery</span>
        <div className="years">{yeargroup}</div>
      </div>
      <div className="rightbox">
        <Event event="Illumination & Rangoli" img={img1} />
        <Event event="General Championship" img={img2} />
        <Event event="Teachers Day" img={img3} />
        <Event event="Intra-hall Events" img={img4} />
        <Event event="Other Events" img={img1} />
      </div>
      <div className={`years mobileyears ${yearmenu ? "active" : ""}`}>
        {mobileyeargroup}
      </div>
    </div>
  );
}

export default Gallery;
