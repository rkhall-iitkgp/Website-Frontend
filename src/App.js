import React from 'react';
import ProfileList from './components/Office_Bearers/ProfileList';
import profiles from './components/Office_Bearers/profiles.json';
import './App.css';

function App(props) {
  return (
    <div className='profile-container'>
      <ProfileList profiles={profiles} />
    </div>
  );
}

export default App;