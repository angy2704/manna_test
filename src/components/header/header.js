// Header.js
import React from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import Breadcrumb from "../breadcrumb/breadcrumb";
import { Link } from "react-router-dom";

import help from "../../assets/images/Help.svg";
import settings from "../../assets/images/Settings.svg";
import user from "../../assets/images/Photo.png";
import BurgerMenu from "../../assets/images/Burger button.svg";

const Header = ({ toggleSidebar }) => {
  return (
    <Navbar className="bg-white py-0" expand="lg">
      <div className="p-3 menu-container">
        <img src={BurgerMenu} className="burger-menu mx-md-auto d-block cursor-pointer" onClick={toggleSidebar} />
      </div>
      <Container className="align-items-center justify-content-between header-container d-none d-md-flex">
        <Breadcrumb />

        <div className="d-flex align-items-center">
          <Link to={"#"} className="me-2">
            <img src={help} />
          </Link>

          <Link to={"#"}>
            <img src={settings} />
          </Link>

          <div className="vr mx-3"></div>

          <div className="text-center me-4">
            <p>Nom et Prenom</p>
            <small>entreprise</small>
          </div>
          <div className="position-relative">
            <img src={user} />
            <Badge
              bg="success"
              className="position-absolute top-0 end-0 rounded-circle px-1 py-0"
            >
              &nbsp;
            </Badge>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
