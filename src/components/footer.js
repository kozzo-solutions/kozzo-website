import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { styled } from 'styled-components';
import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const FooterComponent = styled.div`
  width: 100%;
  background-color: var(--design-orange);
  padding: 10px;
`;

const Footer = () => {
  const {t} = useTranslation('common');

  return (
    <FooterComponent>
      <Stack alignItems="center">
        <Stack direction="row" gap="20px">
          {/* <LinkedInIcon
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
          ></InstagramIcon> */}
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
