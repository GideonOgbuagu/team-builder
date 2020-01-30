import React from 'react';
import './Team.css'

function Team(props) {
    return (
    <div>
        {props.team.map(member => (
            <div className="card-container">
                <h3>{member.memberName}</h3>
                <p>{member.email}</p>
                <p>{member.role}</p>
            </div>
        ))}   
    </div>
    )
}

export default Team;