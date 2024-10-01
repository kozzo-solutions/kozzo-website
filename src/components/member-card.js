import React from "react";

const MemberCard = (props) => (
    <div className="member-card">
        <div className="member-image-background">
            <img src={props.picture} alt={`${props.name}`}/>
        </div>
        <h3>{props.name}</h3>
        <h3>{props.role}</h3>
    </div>
)

export default MemberCard