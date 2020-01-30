import React, { useState } from 'react';
import TeamForm from './components/TeamForm';
import Team from './components/Team';
import './App.css';

function App() {
  const [team, setTeam] = useState([
    {
      memberName: 'John Smith',
      email: 'johnsmith@gmail.com',
      role: 'Frontend Engineer'
    }
  ]);

// Here we create a template or function 
// for adding new team members
  function addTeamMember(teamMember) {
    const newTeamMember = {
      memberName: teamMember.memberName,
      email: teamMember.email,
      role: teamMember.role
    }
    setTeam([...team, newTeamMember]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <TeamForm addTeamMember={addTeamMember}/>
        <Team team={team}/>
      </header>
    </div>
  );
}

export default App;
