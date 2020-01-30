import React, { useState} from 'react';
import './TeamForm.css';


function TeamForm(props) {
const [teamMember, setTeamMember] = useState({
    memberName: '',
    email: '',
    role: ''
})

const handleInputChange = e => {
    setTeamMember({
        ...teamMember, 
        [e.target.name]: e.target.value
    })
}

const onInputSubmit = e => {
    e.preventDefault();
    props.addTeamMember(teamMember);
    setTeamMember({ memberName: '', email: '', role: ''});
}

    return (
        <form onSubmit={onInputSubmit}>
            <div className="input-container">
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="memberName" value={teamMember.memberName} placeholder="Full Name" onChange={handleInputChange}/>
                

                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" value={teamMember.email} placeholder="Email" onChange={handleInputChange}/>
                

                <label htmlFor="role">Role: </label>
                <input type="text" id="role" name="role" value={teamMember.role} placeholder="Job Description" onChange={handleInputChange}/>
            
                <button type="submit">Add Team Member</button>
            </div>

        </form>
    )
}

export default TeamForm;