import React from 'react';
import ServiceCard from './service-card';
import { useTranslation } from 'react-i18next';
import { Stack, Typography } from '@mui/material';
import styled from 'styled-components';
import { PiDevicesThin } from 'react-icons/pi';
import { PiLayoutThin } from "react-icons/pi";
import { PiGraphLight } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";

const SectionContainer = styled(Stack)`
  display: flex;
  padding: 160px var(--side-padding) 20px var(--side-padding);
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
`;

const ServicesFlex = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding-top: 40px;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }

`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--design-blue);
  margin: 20px 0;
`;

const Services = () => {
  const { t } = useTranslation('common');

  return (
    <SectionContainer>
      <Stack width="100%" gap={2} maxWidth="var(--max-width)">
        <Stack direction="horizontal" alignItems="center" gap={4}>
          <Typography
            whiteSpace="nowrap"
            variant="h1"
            fontSize="var(--font-xlarge)"
            fontWeight="600"
            color="var(--design-blue)"
            fontFamily="yugo-regular"
          >
            {t('services.title')}
          </Typography>
          <Separator />
        </Stack>
        <ServicesFlex>
          <ServiceCard
            icon={<PiDevicesThin size="100px" />}
            title={t('services.web-design-code-title')}
            desc={t('services.web-design-code-desc')}
          />
          <ServiceCard
            icon={<PiLayoutThin size="100px" />}
            title={t('services.web-design-no-code-title')}
            desc={t('services.web-design-no-code-desc')}
          />
          <ServiceCard
            icon={<PiGraphLight size="100px" />}
            title={t('services.software-solutions-title')}
            desc={t('services.software-solutions-desc')}
          />
          <ServiceCard
            icon={<CiSettings size="100px" />}
            title={t('services.service-maintenance-title')}
            desc={t('services.service-maintenance-desc')}
          />
        </ServicesFlex>
      </Stack>
    </SectionContainer>
  );
};
export default Services;
