import { Typography } from '@mui/material';
import React from 'react';
import { styled } from 'styled-components';

const Card = styled.div`
  width: 400px;
  height: fit-content;
  background-color: var(--design-blue);
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;  
const CardImage = styled.img`
  width: 400px;
  height: 400px;
`;


const MemberCard = ({ name, role, picture }) => (
  <Card>
    <Typography paddingLeft="10px" paddingTop="10px" fontSize="var(--font-medium)" fontWeight="bold" color="var(--design-cream)">{name}</Typography>
    <Typography paddingLeft="10px" paddingTop="5px" fontSize="var(--font-medium)" fontWeight="bold" color="var(--design-cream)">{role}</Typography>
    <CardImage src={picture} alt={`${name}`} />
  </Card>
);

export default MemberCard;
