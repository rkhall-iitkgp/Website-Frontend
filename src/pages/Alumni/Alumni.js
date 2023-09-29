
import styles from "./css/alumni.module.css";
import styleGal from "../Galllery/css/gallery.module.css";
import React, { useEffect } from "react";
import Yearbox from "../Galllery/yearbox";
import Navbar from "../../components/Navbar/Navbar";
import Alumnus from "./Alumnus";
import { useState } from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";
import Alumform from "./Alumform";
import ScrollToTopButton from '../../components/ScrollToTop/ScrollToTopButton';


export function Alumni() {
  const [year, setYear] = useState(2019);
  const [yearmenu, setYearmenu] = useState(false);

  const [alumni, setAlumni] = useState(undefined);

  const url = "https://rk-backend.onrender.com/alum/data/";

  useEffect(() => {
    function getAlumni() {
      axios
        .get(`${url}${year}`)
        .then((response) => {
          const alumni = response.data;
          alumni.sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
          console.log(alumni);
          setAlumni(
            alumni.map((obj) => (
              <Alumnus
                img={"photo" in obj ? obj.photo : "default.jpg"}
                name={obj.name}
                desc={obj.bio}
                linkedin={obj.link}
                batch={year}
              />
            ))
          );
        })
        .catch((error) => {
          console.log(error);
          setAlumni([<h1 className={styleGal.loader}>No records found</h1>]);
        });
    }
    getAlumni();
  }, [year]);

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

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      {/* <Alumform /> */}
      <div className={styles.alumpage}>
        <div className={`${styles.leftboxAlumni} ${yearmenu ? `${styleGal.active}` : ""}`}>
          <span className={styleGal.boxHeader}>Our Alumni</span>
          <div className="years">{yeargroup}</div>
        </div>
        <div className={`years ${styleGal.mobileyears} ${yearmenu ? `${styleGal.active}` : ""}`}>
          {mobileyeargroup}
        </div>
        <ScrollToTopButton />

        <div className={styles.alum}>
          {alumni ? (
            <div className={styleGal.rightbox}>{alumni}</div>
            
          ) : (
            <Audio
              height="80"
              width="80"
              radius="9"
              color="#222436"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass="loader"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Alumni;
