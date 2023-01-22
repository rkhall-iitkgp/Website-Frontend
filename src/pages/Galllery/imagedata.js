// export const Imagedata = [
//     {
//       src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
//       width: 4,
//       height: 3
//     },
//     {
//       src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
//       width: 1,
//       height: 1
//     },
//     {
//       src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
//       width: 3,
//       height: 4
//     },
//     {
//       src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
//       width: 3,
//       height: 4
//     },
//     {
//       src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
//       width: 3,
//       height: 4
//     },
//     {
//       src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
//       width: 4,
//       height: 3
//     },
//     {
//       src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
//       width: 3,
//       height: 4
//     },
//     {
//       src: "https://source.unsplash.com/PpOHJezOalU/800x599",
//       width: 4,
//       height: 3
//     },
//     {
//       src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
//       width: 4,
//       height: 3
//     }
//   ];

import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function Imagedata(event, year) {
  console.log(event);
  console.log(year);
  const [photos, setPhotos] = useState([]);
  const url = `https://rk-gallery-api.onrender.com/api/${year}/${event}`;

  useEffect(() => {
    getPics();
  }, [url]);

  function getPics() {
    axios
      .get(`${url}`)
      .then((response) => {
        const pics = response.data.phtoturls;
        console.log(pics);
        setPhotos(
          pics.map((obj) => (
            {
              "src": obj.url,
              "width": obj.width,
              "height": obj.height
            }
          ))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return photos;
}
