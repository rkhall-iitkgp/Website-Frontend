import "./css/alumni.css";
import React, { useEffect } from "react";
import Yearbox from "./yearbox";
import Navbar from "../../components/Navbar/Navbar";
import Alumnus from "./Alumnus";
import { useState } from "react";
import axios from "axios";
import { Audio } from 'react-loader-spinner';

export function Alumni() {
    const [year, setYear] = useState(2022);
    const [yearmenu, setYearmenu] = useState(false);

    const [alumni, setAlumni] = useState(undefined);

    const url = "https://rk-backend.onrender.com/alum/data/";

    useEffect(() => {
        function getAlumni() {
            axios
                .get(`${url}${year}`)
                .then((response) => {
                    const alumni = response.data;
                    console.log(alumni);
                    setAlumni(
                        alumni.sort((a, b) => (
                            a.name > b.name
                        )).map((obj) => (
                            <Alumnus
                                img={'photo' in obj ? obj.photo : 'default.jpg'}
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
            <div className={`left-box ${yearmenu ? "active" : ""}`}>
                <span className="boxheader">Our Alumni</span>
                <div className="years-alumni">{yeargroup}</div>
            </div>
            {
                alumni ? <div className="right-box">{alumni}</div> : <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="#222436"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass="right-box"
                />
            }
            <div className={`years mobileyears ${yearmenu ? "active" : ""}`}>
                {mobileyeargroup}
            </div>
        </>
    );
}

export default Alumni;
