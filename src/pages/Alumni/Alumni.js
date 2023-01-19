import "./css/alumni.css";
import React, { useEffect } from "react";
import Yearbox from "./yearbox";
import Navbar from "../../components/Navbar/Navbar";
import Alumnus from "./Alumnus";
import { useState } from "react";
import axios from "axios";

export function Alumni() {
  const [year, setYear] = useState(2022);
  const [yearmenu, setYearmenu] = useState(false);

  const [alumni, setAlumni] = useState([]);

  const url = "https://rk-backend.onrender.com/alum/data/";

  useEffect(() => {
    getAlumni();
  }, [year]);

  function getAlumni() {
    axios
      .get(`${url}${year}`)
      .then((response) => {
        const alumni = response.data;
        console.log(alumni);
        setAlumni(
          alumni.map((obj) => (
            <Alumnus
              img={obj.photo}
              name={obj.name}
              desc={obj.bio}
              linkedin={obj.link}
              batch={year}
            />
          ))
        );
      })
      .catch((error) => {
        console.log(error)
        setAlumni([<h1>No records found</h1>])
      });
  }

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
      <div className={`left-box ${yearmenu ? "active" : ""}`}>
        <span className="boxheader">Our Alumni</span>
        <div className="years-alumni">{yeargroup}</div>
      </div>

      <div className="right-box">{alumni}</div>

      <div className={`years mobileyears ${yearmenu ? "active" : ""}`}>
        {mobileyeargroup}
      </div>
    </>
  );
}

export default Alumni;
