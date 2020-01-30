import React, { useState } from 'react';
import TeamForm from './components/TeamForm';
import Team from './components/Team';
import './App.css';

function App() {
  const [teams, setTeams] = useState({
      name: 'John Smith',
      email: 'johnsmith@gmail.com',
      role: 'Frontend Engineer'
  })

  

  return (
    <div className="App">
      <header className="App-header">
        <TeamForm />
        <Team />
      </header>
    </div>
  );
}

export default App;
