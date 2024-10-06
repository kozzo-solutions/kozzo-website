import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { styled } from 'styled-components';
import { Link, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const FooterComponent = styled.div`
  width: 100%;
  background-color: var(--design-orange);
  padding: 10px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 35px;
  padding: 10px;
  @media (max-width: 550px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: var(--font-medium) !important;
  color: var(--design-blue) !important;
  font-weight: 600 !important;
`;

const Footer = () => {
  const [t] = useTranslation('common');

  return (
    <FooterComponent>
      <Stack alignItems="center">
        <Nav>
          <NavLink href="#">{t('header.services')}</NavLink>
          <NavLink href="#">{t('header.realisations')}</NavLink>
          <NavLink href="#">{t('header.about')}</NavLink>
          <NavLink href="#">{t('header.contact')}</NavLink>
        </Nav>
        <Stack direction="row" gap="20px">
          <LinkedInIcon
            style={{
              width: '40px',
              height: '40px',
              color: 'var(--design-blue)',
            }}
          ></LinkedInIcon>
          <InstagramIcon
            style={{
              width: '40px',
              height: '40px',
              color: 'var(--design-blue)',
            }}
          ></InstagramIcon>
        </Stack>
        <Typography
          padding="10px"
          fontSize="var(--font-small)"
          color="var(--design-blue)"
          fontWeight="bold"
        >
          {t("footer.rights-reserved")}
        </Typography>
      </Stack>
    </FooterComponent>
  );
};

export default Footer;
