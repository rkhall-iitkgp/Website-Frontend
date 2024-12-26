import styles from "./css/gallery.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import img1 from "./illumination.png";
import img2 from "./gc.png";
import img3 from "./teachersday.png";
import img4 from "./janmashtami.png";
import Event from "./Event"

export function Gallery() {
  const Navigate = useNavigate();

  function handleEventClick(event) {
    Navigate(`/coming-soon`);
  }

  return (
    <div className={styles.gallerypage} style={{ paddingTop: "80px" }}>
      <div className={styles.rightbox}>
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
