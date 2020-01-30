import React from 'react';

function Teams(props) {
    return (
    <div>
        {props.team.map(member => {
            <div className="card-container">
                <h3>{memberName}</h3>
                <p>{email}</p>
                <p>{role}</p>
            </div>
        })}   
    </div>
    )
}

export default Teams;