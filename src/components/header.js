import React, { useState } from 'react';
import logoDescripteur from '../resources/images/kozzo-logo-descripteur.png';
import { styled } from 'styled-components';
import { Link, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

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
`;

const Logo = styled.img`
  width: auto;
  height: 100%;
`;

const Nav = styled.nav`
  display: flex;
  gap: 35px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: var(--font-medium) !important;
  color: var(--design-blue) !important;
  font-weight: 600 !important;
`;

const LanguageButton = styled.button`
  background: none !important;
  padding: 0 !important;
  font-size: var(--font-medium) !important;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  font-size: (var(--font-medium));
  color: var(--design-blue) !important;
  text-transform: uppercase;
`;

const KozzoHeader = () => {
  const [t, i18n] = useTranslation('common');

  const toggleLanguage = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('fr');
    } else {
      i18n.changeLanguage('en');
    }
  };

  return (
    <Header>
      <Logo src={logoDescripteur} alt="logo" />
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
      </Stack>
    </Header>
  );
};

export default KozzoHeader;
