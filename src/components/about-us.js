import React from 'react';
import jonathanPicture from '../resources/images/jonathan.png';
import etiennePicture from '../resources/images/etienne.png';
import MemberCard from './member-card';
import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const [t] = useTranslation('common');

  return(
    <Stack direction="horizontal" alignItems="center" maxWidth="var(--max-width)">
      <Stack>
        <Stack>
          <MemberCard
            name="Étienne Arsenault"
            role={t("about-us.co-founder-title")}
            picture={etiennePicture}
          />
          <MemberCard
            name="Jonathan Bessette"
            role={t("about-us.co-founder-title")}
            picture={jonathanPicture}
          />
          <Typography
            fontSize="var(--font-small)"
            color="var(--design-blue)"
            fontFamily="var(--font-familiy)"
          >
            {t("about-us.kozzo-description")}
          </Typography>
        </Stack>
      </Stack> 
        <Typography
          variant="h1"
          fontSize="80px"
          fontWeight="600"
          color="var(--design-blue)"
          fontFamily="var(--font-familiy)"
        >
          Meet our team
        </Typography>
    </Stack>
  )
};

export default AboutUs;
