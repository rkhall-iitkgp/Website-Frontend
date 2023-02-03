import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Imagedata from "./imagedata";
import { Audio } from 'react-loader-spinner';

function Eventpics(props) {
    const [photos, isLoading] = Imagedata(props.url, props.year);
    console.log(photos)

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
        <div className="gallery">
            <span className="eventtitle">{props.title}</span>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map((x) => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title,
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
            {isLoading  ? <Audio
                height="80"
                width="80"
                radius="9"
                color="#222436"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass="loader"
            />: photos.length === 0 && <h1 className="loader">No records found</h1>}
        </div>
    );
}

export default Eventpics;
