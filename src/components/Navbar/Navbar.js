import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import "./css/style.css";

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  padding: 0px 0px;
  display: flex;
  justify-content: space-between;
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <a className="RKH" href="#">
          R K H
        </a>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
