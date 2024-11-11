import React from 'react';
import heroImage from '../resources/images/hero-image-space.png';
import { Stack, Typography } from '@mui/material';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Button from './button/button';

const SectionContainer = styled(Stack)`
  background-color: var(--design-orange);
  display: flex;
  padding: 80px var(--side-padding);
  padding-top: 20px;
  color: var(--design-cream);
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  height: calc(100vh - 300px);
  position: relative;
  max-height: 800px;

  @media (max-height: 900px) {
    height: 100vh;
  }

  @media (max-width: 800px) {
    > div {
      gap: 0px;
    }
    text-align: center;
  }

  @media (max-width: 600px) {
    height: 100%;
    padding: 80px 20px;
  }
`;

const LeftStack = styled(Stack)`
  width: 60%;
  gap: 16px;
  padding-top: 64px;

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 800px) {
    align-items: center;
    text-align: center;
    width: 100%;
  }
`;

const HeroImage = styled.img`
  filter: drop-shadow(30px 30px 20px rgba(0, 0, 0, 0.2)) invert(0);
  width: 100%;
  margin-bottom: -260px;

  @media (max-width: 1200px) {
    margin-bottom: -160px;
  }

  @media (max-width: 750px) {
    position: absolute;
    bottom: 60px;
    right: 80px;
    width: 200px;
  }

  @media (max-width: 800px) {
    display: none;
  }

  @media (max-height: 600px) {
    display: none;
  }
`;

const TopSection = () => {
  const { t } = useTranslation('common');

  return (
    <SectionContainer direction="horizontal">
      <Stack
        maxWidth="var(--max-width)"
        height="auto"
        direction="horizontal"
        gap="96px"
        alignItems="center"
      >
        <LeftStack>
          <Typography
            fontFamily="var(--font-family)"
            fontWeight="600"
            fontSize="var(--font-xlarge)"
          >
            {t('top-section.main-sentence')}
          </Typography>
          <Typography
            fontWeight={200}
            fontFamily="var(--font-family)"
            fontSize="var(--font-xmedium)"
          >
            {t('top-section.detailed-sentence')}
          </Typography>
          <Button
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            width="260"
            text={t('top-section.button-text')}
            style={{ width: '100%', maxWidth: '260px' }} // Ensuring button remains centered
          />
        </LeftStack>
        <Stack>
          <HeroImage src={heroImage} alt="blocs"></HeroImage>
        </Stack>
      </Stack>
    </SectionContainer>
  );
};

export default TopSection;
