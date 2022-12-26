import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css';

function App(props) {
  return (
    <div className='profile-container'>
      <div className='title'>
        <h2>Current Office-Bearers</h2>
      </div>
      <div className="profile-list">
        {props.profiles.map(profile => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            position={profile.position}
            imageUrl={profile.imageUrl}
            twitterUrl={profile.twitterUrl}
            facebookUrl={profile.facebookUrl}
            instagramUrl={profile.instagramUrl}
            linkedinUrl={profile.linkedinUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;