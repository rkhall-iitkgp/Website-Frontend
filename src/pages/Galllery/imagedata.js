import { useEffect, useState } from "react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function Imagedata(event, year) {
  console.log(event);
  console.log(year);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 30;
  const url = `${BACKEND_URL}/api/${year}/${event}`;

  useEffect(() => {
    getPics();
  }, [url, currentPage]);

  function getPics() {
    setIsLoading(true);
    axios
      .get(`${url}`)
      .then((response) => {
        const pics = response.data.photoURLs;
        console.log(pics);
        setPhotos(
          pics.map((imageUrl) => {
            return {
              src: imageUrl,
              width: 4,
              height: 3,
            };
          })
        );
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }

  function handleLoadMore() {
    setCurrentPage(currentPage + 1);
  }

  return [photos, isLoading];

  // return (
  //   <>
  //     {photos.map((photo) => (
  //       <img
  //         src={photo.src}
  //         width={photo.width}
  //         height={photo.height}
  //         alt="img"
  //       />
  //     ))}
  //     {isLoading ? (
  //       <p>Loading...</p>
  //     ) : (
  //       <button onClick={handleLoadMore}>Load More</button>
  //     )}
  //   </>
  // );
}
