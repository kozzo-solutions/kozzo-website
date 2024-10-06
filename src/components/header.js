import React, { useState } from 'react';
import logoDescripteur from '../resources/images/kozzo-logo-descripteur.png';
import logoNom from '../resources/images/kozzo-logo-nom-coul.png';
import { styled } from 'styled-components';
import { Link, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from 'react-icons/ai'; // Import the close icon

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--design-orange);
  position: fixed;
  z-index: 1;
  height: 100px;
  padding: 20px 50px;
  box-sizing: border-box;
`;

const LogoMonitor = styled.img`
  width: auto;
  height: 100%;
  @media (max-width: 1120px) {
    display: none;
  }
`;

const LogoMobile = styled.img`
  width: auto;
  height: 100%;
  display: none;
  @media (max-width: 1120px) {
    display: inline; 
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 35px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: var(--font-medium) !important;
  color: var(--design-blue) !important;
  font-family: yugo-medium !important;
`;

const LanguageButton = styled.button`
  background: none !important;
  padding: 0 !important;
  font-size: var(--font-medium) !important;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  color: var(--design-blue) !important;
  text-transform: uppercase;
`;

const SideMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.open ? '0' : '-300px')}; /* Slide in/out */
  width: 300px;
  height: 100%;
  background-color: var(--design-orange);
  z-index: 10;
  display: flex;
  flex-direction: column;
  transition: right 0.3s ease-in-out; /* Animate slide */
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  align-self: flex-end;
`;

const KozzoHeader = () => {
  const [t, i18n] = useTranslation('common');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Header>
        <LogoMonitor src={logoDescripteur} alt="logo" />
        <LogoMobile src={logoNom} alt="logo" />

        <Stack gap="60px" direction="horizontal">
          <Nav>
            <NavLink href="#">{t('header.services')}</NavLink>
            <NavLink href="#">{t('header.realisations')}</NavLink>
            <NavLink href="#">{t('header.about')}</NavLink>
            <NavLink href="#">{t('header.contact')}</NavLink>
          </Nav>
          <LanguageButton onClick={toggleLanguage}>
            {t('header.language')}
          </LanguageButton>
          <RxHamburgerMenu 
            size="50px" 
            onClick={toggleMenu} // Open the menu when clicked
            style={{ display: 'inline' }}
            sx={{
              '@media (max-width: 1000px)': {
                display: 'inline',
              },
            }}
          />
        </Stack>
      </Header>

      {/* Side Menu */}
      <SideMenu open={menuOpen}>
        <CloseButton onClick={toggleMenu}>
          <AiOutlineClose size="30px" />
        </CloseButton>
        <NavLink href="#" onClick={toggleMenu}>
          {t('header.services')}
        </NavLink>
        <NavLink href="#" onClick={toggleMenu}>
          {t('header.realisations')}
        </NavLink>
        <NavLink href="#" onClick={toggleMenu}>
          {t('header.about')}
        </NavLink>
        <NavLink href="#" onClick={toggleMenu}>
          {t('header.contact')}
        </NavLink>
      </SideMenu>
    </>
  );
};

export default KozzoHeader;
