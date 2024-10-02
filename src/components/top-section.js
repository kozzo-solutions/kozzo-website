import React from 'react';
import blocs from '../resources/images/blocs.png';
import { Stack, Typography } from '@mui/material';
import styled from 'styled-components';

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

const TopSection = () => (
  <SectionContainer direction="horizontal">
    <Stack maxWidth="var(--max-width)" gap={'20px'}>
      <Typography fontWeight="600" fontSize="var(--font-xlarge)">
        Amenez votre entreprise vers le monde de demain
      </Typography>
      <Typography fontSize="var(--font-large)">
        Nous proposons des solutions numériques personnalisées pour répondre à
        vos besoins spécifiques et faciliter votre intégration digitale.
      </Typography>
      <Button style={{ width: 'min-content' }} variant="contained">
        <Typography fontSize="var(--font-small)" whiteSpace="nowrap">
          Parlons de votre projet
        </Typography>
      </Button>
    </Stack>
    <img src={blocs} alt="blocs"></img>
  </SectionContainer>
);

export default TopSection;
