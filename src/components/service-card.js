import React from "react";

const ServiceCard = (props) => (
    <div className="service-card">
        {props.icon}
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
    </div>
)

export default ServiceCard