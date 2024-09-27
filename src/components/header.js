import React from "react";
import logoDescripteur from '../images/kozzo-logo-descripteur.png';
import logoNom from '../images/kozzo-logo-nom-coul.png';
import Nav from "./nav";

const Header = () => (
    <header className="header">
        <a href="#"><img className="monitor-image" src={logoDescripteur} alt="logo"/></a>
        <a href="#"><img className="mobile-image" src={logoNom} alt="logo"/></a>
        <Nav/>
    </header>
)

export default Header;