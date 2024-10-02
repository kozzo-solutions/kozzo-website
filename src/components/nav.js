import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

const Nav = () => (
  <nav className="nav">
    <Link href="#" underline="hover">
      Services
    </Link>
    <Link href="#" underline="hover">
      Réalisations
    </Link>
    <Link href="#" underline="hover">
      À propos
    </Link>
    <Link href="#" underline="hover">
      Contact
    </Link>
    <Link href="#">EN</Link>
    <MenuIcon className="hamburger-menu" />
  </nav>
);

export default Nav;
