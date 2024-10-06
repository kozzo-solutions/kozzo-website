import { Typography } from '@mui/material';
import React from 'react';
import { styled } from 'styled-components';

const Card = styled.div`
  width: 100%;
  height: 280px;
  padding: 40px 20px 20px 20px;
  color: var(--design-blue);
  transition: transform 0.3s ease-out;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-60px) !important;
  }

  .card-description {
    opacity: 0;
    transition: opacity 0.3s ease-in;
  }

  &:hover .card-description {
    opacity: 1;
  }

`;

const ServiceCard = ({ icon, title, desc }) => (
  <Card>
    <div className="content" style={{ textAlign: 'center' }}>
      {icon}
      <Typography fontSize="var(--font-medium)" fontWeight="600">
        {title}
      </Typography>
      <p className="card-description">{desc}</p>
    </div>
  </Card>
);

export default ServiceCard;
