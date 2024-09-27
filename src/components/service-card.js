import React from "react";
import ComputerIcon from '@mui/icons-material/Computer';

const ServiceCard = (props) => (
    <div className="service-card">
        {<ComputerIcon></ComputerIcon>}
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
    </div>
)

export default ServiceCard