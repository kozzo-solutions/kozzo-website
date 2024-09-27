import React from "react";
import logoDescripteur from '../images/kozzo-logo-descripteur.png';
import logoNom from '../images/kozzo-logo-nom-coul.png';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

const Header = () => (
    <header className="header">
        <a href="#"><img className="monitor-image" src={logoDescripteur} alt="logo"/></a>
        <a href="#"><img className="mobile-image" src={logoNom} alt="logo"/></a>
        <nav className="nav">
            <Link href="#" underline="hover">Services</Link>
            <Link href="#" underline="hover">Réalisations</Link>
            <Link href="#" underline="hover">À propos</Link>
            <Link href="#" underline="hover">Contact</Link>
            <Link href="#">EN</Link>
            <MenuIcon className="hamburger-menu"/>
        </nav>
    </header>
)

export default Header;