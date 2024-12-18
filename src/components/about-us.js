import React from 'react';
import jonathanPicture from '../resources/images/jonathan.png';
import etiennePicture from '../resources/images/etienne.png';
import MemberCard from './member-card';
import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const SectionContainer = styled(Stack)`
  display: flex;
  padding: 100px var(--side-padding) 20px var(--side-padding);
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--design-blue);
  margin: 20px 0;
`;

const Members = styled.div`
  display: flex;
  gap: 50px;
  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 900px) {
    flex-direction: row;
    width: 80%
  }
  
  @media (max-width: 700px) {
    flex-direction: column;
    width: 60%;
    min-width: 300px;
  }
`;

const AboutUs = () => {
  const { t } = useTranslation('common');

  return (
    <SectionContainer id="about">
      <Stack width="100%" gap={2} maxWidth="var(--max-width)">
        <Stack
          direction="horizontal"
          alignItems="center"
          gap={4}
          marginBottom={6}
        >
          <Typography
            whiteSpace="nowrap"
            variant="h1"
            fontSize="var(--font-xlarge)"
            fontWeight="600"
            color="var(--design-blue)"
          >
            {t('about-us.about-us-title')}
          </Typography>
          <Separator />
        </Stack>
        <Stack alignItems="center" textAlign="center" gap="80px">
          <Typography
            sx={{
              maxWidth: '700px',
              fontSize: 'var(--font-small)',
              color: 'var(--design-blue)',
              fontFamily: 'var(--font-family)',
            }}
          >
            {t('about-us.kozzo-history')}
            <br />
            <br />
            {t('about-us.kozzo-description')}
            <br />
            <br />
            <strong>{t('about-us.together')}</strong>
          </Typography>

          <Members>
            <MemberCard
              name="Étienne Arsenault"
              role={t('about-us.co-owner-title')}
              picture={etiennePicture}
            />
            <MemberCard
              name="Jonathan Bessette"
              role={t('about-us.co-owner-title')}
              picture={jonathanPicture}
            />
          </Members>
        </Stack>
      </Stack>
    </SectionContainer>
  );
};

export default AboutUs;
