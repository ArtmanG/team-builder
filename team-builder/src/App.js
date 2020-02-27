import React, { useState } from 'react';
import MemberForm from './components/MemberForm';
import Members from './components/Members';

import './App.css';
// import logo from './logo.svg';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'Gregory',
      email: 'g.hawman@gmail.com',
      role: 'Web Dev'
    }
  ]);

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