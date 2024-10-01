import React from "react";
import ServiceCard from "./service-card";
import ComputerIcon from '@mui/icons-material/Computer';


const Services = () => (
    <div className="services-section">
        <h2>Services</h2>
        <div className="service-cards">
            <ServiceCard icon = {<ComputerIcon></ComputerIcon>} title="Web Design" desc="sit amet rhoncus quam eros non augue. Praesent varius imperdiet nisl. Nunc ante mauris, blandit eu diam ut, pharetra interdum risus. Maecenas facilisis semper risus vitae ullamcorper."/>
            <ServiceCard title="Web Design" desc="sit amet rhoncus quam eros non augue. Praesent varius imperdiet nisl. Nunc ante mauris, blandit eu diam ut, pharetra interdum risus. Maecenas facilisis semper risus vitae ullamcorper."/>
            <ServiceCard title="Web Design" desc="sit amet rhoncus quam eros non augue. Praesent varius imperdiet nisl. Nunc ante mauris, blandit eu diam ut, pharetra interdum risus. Maecenas facilisis semper risus vitae ullamcorper."/>
            <ServiceCard title="Web Design" desc="sit amet rhoncus quam eros non augue. Praesent varius imperdiet nisl. Nunc ante mauris, blandit eu diam ut, pharetra interdum risus. Maecenas facilisis semper risus vitae ullamcorper."/>
        </div>
    </div>
)
export default Services;