import React from 'react';
import blocs from '../resources/images/blocs.png';
import { Stack, Typography } from '@mui/material';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const SectionContainer = styled(Stack)`
  background-color: var(--design-orange);
  display: flex;
  padding: 80px 200px;
  font-family: var(--font-family);
  color: var(--design-cream);
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;

  > div {
    width: 60%;
  }

  > img {
    width: 40%;
  }
`;

const Button = styled.button`
  padding: 12px !important;
  font-size: var(--font-small) !important;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  color: var(--design-cream);
  background-color: var(--design-blue);
`;

const TopSection = () => {

  const [t, i18n] = useTranslation('common');

  return(
    <SectionContainer direction="horizontal">
      <Stack maxWidth="var(--max-width)" gap={'20px'}>
        <Typography fontWeight="600" fontSize="var(--font-xlarge)">
          {t('top-section.main-sentence')}
        </Typography>
        <Typography fontSize="var(--font-large)">
          {t('top-section.detailed-sentence')}
        </Typography>
        <Button style={{ width: 'min-content' }} variant="contained">
          <Typography fontSize="var(--font-small)" whiteSpace="nowrap">
            {t('top-section.button-text')}
          </Typography>
        </Button>
      </Stack>
      <img src={blocs} alt="blocs"></img>
    </SectionContainer>
  )
};

export default TopSection;
