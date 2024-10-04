import React from 'react';
import ServiceCard from './service-card';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';
import { Grid2, Stack, Typography } from '@mui/material';

const Services = () => {
  const { t } = useTranslation('common');

  return (
    <Stack padding="100px 0" width="100%" maxWidth="var(--max-width)">
      <Stack width="100%" direction="horizontal">
        <Stack width="50%" justifyContent="center">
          <Typography
            variant="h1"
            fontSize="80px"
            fontWeight="600"
            color="var(--design-blue)"
            fontFamily="var(--font-familiy)"
          >
            Learn more about our services
          </Typography>
        </Stack>
        <Grid2 width="50%" spacing={4} container>
          <Grid2 container item xs={6} direction="column">
            <ServiceCard
              icon={<LanguageIcon></LanguageIcon>}
              title={t('services.web-design-code-title')}
              desc="Révolutionnez votre image numérique à l'aide de nos solutions web personnalisées. À l'aide de notre expertise en développement, Kozzo possède les compétences nécessaires permettant à votre organisation de se démarquer face à la concurrence."
            />
            <ServiceCard
              icon={<LanguageIcon></LanguageIcon>}
              title={t('services.web-design-code-title')}
              desc="Révolutionnez votre image numérique à l'aide de nos solutions web personnalisées. À l'aide de notre expertise en développement, Kozzo possède les compétences nécessaires permettant à votre organisation de se démarquer face à la concurrence."
            />
          </Grid2>
          <Grid2 container item xs={6} direction="column">
            <ServiceCard
              icon={<LanguageIcon></LanguageIcon>}
              title={t('services.web-design-code-title')}
              desc="Révolutionnez votre image numérique à l'aide de nos solutions web personnalisées. À l'aide de notre expertise en développement, Kozzo possède les compétences nécessaires permettant à votre organisation de se démarquer face à la concurrence."
            />
            <ServiceCard
              icon={<LanguageIcon></LanguageIcon>}
              title={t('services.web-design-code-title')}
              desc="Révolutionnez votre image numérique à l'aide de nos solutions web personnalisées. À l'aide de notre expertise en développement, Kozzo possède les compétences nécessaires permettant à votre organisation de se démarquer face à la concurrence."
            />
          </Grid2>
        </Grid2>
      </Stack>
    </Stack>
  );
};
export default Services;
