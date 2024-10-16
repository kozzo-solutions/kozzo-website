import { Stack, Typography } from '@mui/material';
import React from 'react';
import { styled } from 'styled-components';

const Card = styled.div`
  width: 50%;
  background-color: var(--design-green-light);
  display: flex;
  justify-content: space-between;
  padding: 0 30px;

  @media (max-width: 1150px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 750px) {
    width: 100%;
    padding: 0 0px;
  }
`;

const CardImage = styled.img`
  width: 60%;
  height: auto;
  object-fit: cover;

  @media (max-width: 1150px) {
    width: 100%;
  }
`;

const MemberCard = ({ name, role, picture }) => (
  <Card>
    <CardImage src={picture} alt={`${name}`} />
    <Stack
      marginTop={3}
      paddingRight={2}
      alignItems="flex-end"
      height="min-content"
    >
      <Typography
        fontSize="var(--font-xmedium)"
        fontWeight="bold"
        color="var(--design-blue)"
        whiteSpace="nowrap"
      >
        {name}
      </Typography>
      <Typography
        fontSize="var(--font-small)"
        fontWeight="400"
        color="var(--design-blue)"
      >
        {role}
      </Typography>
    </Stack>
  </Card>
);

export default MemberCard;
