import React, { useState } from 'react';
import logoDescripteur from '../resources/images/kozzo-logo-descripteur.png';
import logoNom from '../resources/images/kozzo-logo-nom-coul.png';
import { styled } from 'styled-components';
import { Drawer, Link, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--design-orange);
  position: fixed;
  z-index: 1;
  height: 80px;
  padding: 20px 50px;
  box-sizing: border-box;

  @media (max-width: 750px) {
    padding: 20px 20px;
  }
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
  align-items: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: var(--font-medium) !important;
  color: var(--design-blue) !important;
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

const HamburgerMenu = styled(RxHamburgerMenu)`
  display: none;
  @media (max-width: 1000px) {
    display: block;
  }
  cursor: pointer;
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

  const toggleMenuAndScroll = (id) => {
    if (menuOpen) {
      setMenuOpen(false);
    }

    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header>
        <LogoMonitor onClick={scrollToTop} src={logoDescripteur} alt="logo" />
        <LogoMobile onClick={scrollToTop} src={logoNom} alt="logo" />

        <Stack gap="60px" direction="horizontal">
          <Nav>
            <NavLink onClick={() => toggleMenuAndScroll('services')}>
              {t('header.services')}
            </NavLink>
            <NavLink onClick={() => toggleMenuAndScroll('about')}>
              {t('header.about')}
            </NavLink>
            <NavLink onClick={() => toggleMenuAndScroll('contact')}>
              {t('header.contact')}
            </NavLink>
            <LanguageButton onClick={toggleLanguage}>
              {t('header.language')}
            </LanguageButton>
          </Nav>
          <HamburgerMenu size="40px" onClick={toggleMenu} />
        </Stack>
      </Header>

      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Stack padding={12} gap={2}>
          <NavLink onClick={() => toggleMenuAndScroll('services')}>
            {t('header.services')}
          </NavLink>
          <NavLink onClick={() => toggleMenuAndScroll('about')}>
            {t('header.about')}
          </NavLink>
          <NavLink onClick={() => toggleMenuAndScroll('contact')}>
            {t('header.contact')}
          </NavLink>
          <LanguageButton onClick={toggleLanguage}>
            {t('header.language')}
          </LanguageButton>
        </Stack>
      </Drawer>
    </>
  );
};

export default KozzoHeader;
