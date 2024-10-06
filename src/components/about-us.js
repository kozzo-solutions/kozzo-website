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

const AboutUs = () => {
  const { t } = useTranslation('common');

  return (
    <SectionContainer>
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
            fontFamily="yugo-regular"
          >
            {t("about-us.about-us-title")}
          </Typography>
          <Separator />
        </Stack>
        <Stack alignItems="center" textAlign="center" gap="80px">
          <Typography
            maxWidth="50%"
            fontSize="var(--font-small)"
            color="var(--design-blue)"
            fontFamily="var(--font-family)"
          >
            {t('about-us.kozzo-description')}<br/><br/><strong>{t('about-us.together')}</strong>
          </Typography>

          <Stack direction="row" gap="50px">
            <MemberCard
              name="Étienne Arsenault"
              role={t('about-us.co-founder-title')}
              picture={etiennePicture}
            />
            <MemberCard
              name="Jonathan Bessette"
              role={t('about-us.co-founder-title')}
              picture={jonathanPicture}
            />
          </Stack>
        </Stack>
      </Stack>
    </SectionContainer>
  );
};

export default AboutUs;
