// import React, { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";

// export default function Imagedata(event, year) {
//   console.log(event);
//   console.log(year);
//   const [photos, setPhotos] = useState([]);
//   const url = `https://rk-gallery-api.onrender.com/api/${year}/${event}`;

//   useEffect(() => {
//     getPics();
//   }, [url]);

//   function getPics() {
//     axios
//       .get(`${url}`)
//       .then((response) => {
//         const pics = response.data.phtoturls;
//         console.log(pics);
//         setPhotos(
//           pics.map((obj) => (
//             {
//               "src": obj.url,
//               "width": obj.width,
//               "height": obj.height
//             }
//           ))
//         );
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   return photos;
// }

import React, { useEffect, useState } from "react";
import axios from "axios";

console.log(12345);

export default function Imagedata(event, year) {
  console.log(event);
  console.log(year);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 30;
  const url = `https://rk-gallery-api.onrender.com/api/${year}/${event}`;

  useEffect(() => {
    getPics();
  }, [url, currentPage]);

  function getPics() {
    setIsLoading(true);
    axios
      .get(`${url}?page=${currentPage}&per_page=${imagesPerPage}`)
      .then((response) => {
        const pics = response.data.phtoturls;
        console.log(pics);
        setPhotos(
          pics.map((obj) => ({
            src: obj.url,
            width: obj.width,
            height: obj.height,
          }))
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
