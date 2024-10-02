import React from 'react';

const MemberCard = ({ name, role, picture }) => (
  <div className="member-card">
    <div className="member-image-background">
      <img src={picture} alt={`${name}`} />
    </div>
    <h3>{name}</h3>
    <h3>{role}</h3>
  </div>
);

export default MemberCard;
