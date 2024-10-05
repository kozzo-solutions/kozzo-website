import React from 'react';
import ServiceCard from './service-card';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';
import { Stack, Typography } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import styled from 'styled-components';
import { PiDevicesThin } from "react-icons/pi";

const SectionContainer = styled(Stack)`
  display: flex;
  padding: 80px var(--side-padding);
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
`;

const ServicesGrid = styled.div`
  display:grid;
  width: min-content;
  grid-template-columns: auto auto;
  grid-row: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

const Services = () => {
  const { t } = useTranslation('common');

  return (
    <SectionContainer>
      <Stack width="100%" maxWidth="var(--max-width)" direction="horizontal">
        <Stack width="50%" paddingRight="100px" justifyContent="center">
          <Typography
            variant="h1"
            fontSize="80px"
            fontWeight="600"
            color="var(--design-blue)"
          >
            Learn more about our services
          </Typography>
        </Stack>
        <ServicesGrid>
        <ServiceCard
            icon={<PiDevicesThin size="100px" />}
            title={t('services.web-design-code-title')}
            desc={t('services.web-design-code-desc')}
        />
        <ServiceCard
            icon={<PiDevicesThin size="100px" />}
            title={t('services.web-design-no-code-title')}
            desc={t('services.web-design-no-code-desc')}
        />
        <ServiceCard
            icon={<PiDevicesThin size="100px" />}
            title={t('services.software-solutions-title')}
            desc={t('services.software-solutions-desc')}
        />
        <ServiceCard
            icon={<PiDevicesThin size="100px" />}
            title={t('services.service-maintenance-title')}
            desc={t('services.service-maintenance-desc')}
        />
        </ServicesGrid>
      </Stack>
    </SectionContainer>
  );
};
export default Services;
