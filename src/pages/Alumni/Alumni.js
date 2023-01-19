import "./css/alumni.css";
import Yearbox from "./yearbox";
import Navbar from "../../components/Navbar/Navbar";
import Alumnus from "./Alumnus";
import { useState } from "react";

export function Alumni() {
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

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className={`left-box ${yearmenu?"active":""}`}>
        <span className="boxheader">Our Alumni</span>
        <div className="years">{yeargroup}</div>
      </div>

      <div className="right-box">
        <Alumnus />
        <Alumnus />
        <Alumnus />
        <Alumnus />
      </div>

      <div className={`years mobileyears ${yearmenu ? "active" : ""}`}>
        {mobileyeargroup}
      </div>
    </>
  );
}

export default Alumni;
