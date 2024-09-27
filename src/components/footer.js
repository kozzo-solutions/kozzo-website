import React from "react";
import Nav from "./nav";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link';

const Footer = () => (
    <footer className="footer">
        <Nav/>
        <div className="icons">
            <Link href="#"><LinkedInIcon></LinkedInIcon></Link>
            <Link href="#"><InstagramIcon></InstagramIcon></Link>
        </div>
        <p>
            Tous droits réservés par Kozzo ©2024
        </p>
    </footer>
)

export default Footer;