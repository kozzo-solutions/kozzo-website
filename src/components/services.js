import React from "react";
import ServiceCard from "./service-card";


const Services = () => (
    <div className="services-section">
        <h2>Services</h2>
        <div className="service-cards">
            <ServiceCard title="Web Design" desc="Descritpion"/>
            <ServiceCard title="Web Design" desc="Descritpion"/>
            <ServiceCard title="Web Design" desc="Descritpion"/>
            <ServiceCard title="Web Design" desc="Descritpion"/>
        </div>
    </div>
)

export default Services;