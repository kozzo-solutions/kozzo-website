import { Typography } from '@mui/material';
import React from 'react';
import { styled } from 'styled-components';

const Card = styled.div`
  width: 200px;
  height: 280px;
  border: 1px solid var(--design-blue);
  overflow: hidden;
  padding: 20px;

  > div {
    transform: translateY(200px);
    transition: transform 0.3s ease;
  }

  :hover > div {
    transform: translateY(0) !important;
  }
`;

const ServiceCard = ({ icon, title, desc }) => (
  <Card>
    <div className="content">
      {icon}
      <Typography fontSize="var(--font-medium)">{title}</Typography>
      <p>{desc}</p>
    </div>
  </Card>
);

export default ServiceCard;
