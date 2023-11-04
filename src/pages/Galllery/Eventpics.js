import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Imagedata from "./imagedata";
import { Audio } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./css/gallery.module.css";
import ScrollToTopButton from "../../components/ScrollToTop/ScrollToTopButton";

function Eventpics() {
  const { year, event } = useParams();
  const [photos, isLoading] = Imagedata(event, year);
  const Navigate = useNavigate();

  const titles = {
    "illu-rangoli": "Illumination & Rangoli",
    gc: "General Championship",
    "teachers-day": "Teachers Day",
    "intra-hall": "Intra-hall Events",
    random: "Randoms",
  };

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className={styles.gallery}>
      <div className={`${styles.leftbox} ${styles.active}`}>
        <div className={styles.boxHeader}>
          <FontAwesomeIcon
            onClick={() => Navigate("/gallery")}
            icon={faSquareCaretLeft}
            className={styles.backevent}
          />
          <span>Gallery</span>
        </div>
      </div>
      <span className={styles.eventtitle}>{titles[event]}</span>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x?.srcSet,
                caption: x?.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <ScrollToTopButton />

      {isLoading ? (
        <div>
          <Audio
            height="80"
            width="80"
            radius="9"
            color="#222436"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass="loader"
          />
          <div className={styles.loadtext}>Rekindling Memories</div>
        </div>
      ) : (
        photos.length === 0 && (
          <h1 className={styles.noloader}>No memories documented yet</h1>
        )
      )}
    </div>
  );
}

export default Eventpics;
