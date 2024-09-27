import React from "react";
import Nav from "./nav";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => (
    <footer className="footer">
        <Nav/>
        <div className="icons">
            <LinkedInIcon></LinkedInIcon>
            <InstagramIcon></InstagramIcon>
        </div>
        <p>
            Tous droits réservés par Kozzo ©2024
        </p>
    </footer>
)

export default Footer;