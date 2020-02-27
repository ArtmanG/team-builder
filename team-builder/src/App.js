import React, { useState } from 'react';
import MemberForm from './components/MemberForm';
import Members from './components/Members';

import './App.css';
// import logo from './logo.svg';

function App() {
  const [members, setMembers] = useState(
    [
    {
      id: 1,
      name: 'Ira Sanchez',
      email: 'ira.sanchez@gmail.com',
      role: 'Team Lead'
    },
    {
      id: 2,
      name: 'Alex Martinez',
      email: 'alex.martinez@gmail.com',
      role: 'Web Dev, student'
    },
    {
      id: 3,
      name: 'Brian Wardwell',
      email: 'brian.wardwell.com',
      role: 'Web Dev, student'
    },
    {
      id: 4,
      name: 'David Alverez',
      email: 'david.alverez.com',
      role: 'Web Dev, student'
    },
    {
      id: 5,
      name: 'Gregory Hawman',
      email: 'g.hawman@gmail.com',
      role: 'Web Dev, student'
    },
    {
      id: 6,
      name: 'Henry Ramirez',
      email: 'g.hawman@gmail.com',
      role: 'Web Dev, student'
    },
    {
      id: 7,
      name: 'Tiffany Crosby',
      email: 'g.hawman@gmail.com',
      role: 'Web Dev, student'
    }
    
    ]
  );

    const addNewMember = member => {
      const newMember = {
        id: Date.now(),
        name: member.name,
        email: member.email,
        role: member.role
      };
      setMembers([...members, newMember]);
    };

  return (
    <div>
      <h1>Team Members</h1>
      <Members members={members} />
      <MemberForm addNewMember={addNewMember} />
    </div>
  );

  // REACT SPINNING LOGO
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
