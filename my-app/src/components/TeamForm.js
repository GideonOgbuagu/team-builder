import React, { useState} from 'react';


function TeamForm() {
const [teamMember, setTeamMember] = useState({
    memberName: '',
    email: '',
    role: ''
})

const handleInputChange = e => {
    
}

    return (
        <form>
            <label hmtlFor="">Name:</label>
            <input type="text" id="" name="memberName" value={teamMember.memberName}/>
            <label hmtlFor="">Name:</label>
            <input type="email" id="" name="email" value={teamMember.email}/>
            <label hmtlFor="">Name:</label>
            <input type="text" id="" name="role" value={teamMember.role}/>

        </form>
    )
}

export default TeamForm;