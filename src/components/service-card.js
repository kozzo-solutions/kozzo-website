import React from 'react';

const ServiceCard = ({ icon, title, desc }) => (
  <div className="service-card">
    {icon}
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);

export default ServiceCard;
