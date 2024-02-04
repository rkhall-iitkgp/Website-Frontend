import styles from "./css/gallery.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Yearbox from "./yearbox";
import Event from "./Event";
import Eventpics from "./Eventpics";
import { useNavigate } from "react-router-dom";

import img1 from "./illumination.png";
import img2 from "./gc.png";
import img3 from "./teachersday.png";
import img4 from "./janmashtami.png";

// document.querySelector("react-photo-gallery--gallery").getElementsByTagName("img").loading = "lazy";

export function Gallery() {
  const [year, setYear] = useState(2022);
  const [yearmenu, setYearmenu] = useState(false);
  const [event, setEvent] = useState(0);
  const Navigate = useNavigate();

  function handleClick(year) {
    setYear(year);
    ((window.innerWidth < 1200 && yearmenu) || window.innerWidth >= 1200) &&
      setEvent(0);
    setYearmenu((prev) => !prev);
  }

  function handleEventClick(event) {
    Navigate(`/gallery/${year}/${event}`);
  }

  const yeargroup = [...Array(5).keys()]
    .map((i) => 2022 - i)
    .map((i) => (
      <Yearbox year={i} selected={year === i} handleClick={handleClick} />
    ));

  const mobileyeargroup = [...Array(1).keys()]
    .map((i) => 2022 - i)
    .map(
      (i) =>
        year !== i && (
          <Yearbox year={i} selected={year === i} handleClick={handleClick} />
        )
    );

  return (
    <div className={styles.gallerypage}>
      <div
        className={`${styles.leftbox} ${yearmenu ? `${styles.active}` : ""}`}
      >
        <div className={styles.boxHeader}>
          {event > 0 && (
            <FontAwesomeIcon
              onClick={() => handleEventClick(0)}
              icon={faSquareCaretLeft}
              className={styles.backevent}
            />
          )}
          <span>Gallery</span>
        </div>
        <div
        // className="years"
        >
          {yeargroup}
        </div>
      </div>

      {/* years  */}
      <div
        className={`
      ${styles.mobileyears} ${yearmenu ? `${styles.active}` : ""}`}
      >
        {mobileyeargroup}
      </div>

      <div
        className={`${styles.rightbox} ${event > 0 ? `${styles.active}` : ""}`}
      >
        <Event
          id={"illu-rangoli"}
          event="Illumination & Rangoli"
          img={img1}
          handleEventClick={handleEventClick}
        />
        <Event
          id={"gc"}
          event="General Championship"
          img={img2}
          handleEventClick={handleEventClick}
        />
        <Event
          id={"teachers-day"}
          event="Teachers Day"
          img={img3}
          handleEventClick={handleEventClick}
        />
        <Event
          id={"intra-hall"}
          event="Intra-hall Events"
          img={img4}
          handleEventClick={handleEventClick}
        />
        <Event
          id={"random"}
          event="Randoms"
          img={img1}
          handleEventClick={handleEventClick}
        />
      </div>
    </div>
  );
}

export default Gallery;
