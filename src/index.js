import React from 'react';
import ReactDOM from 'react-dom';
import ProfileList from './components/Office_Bearers/ProfileList';
import profiles from './components/Office_Bearers/profiles.json';

ReactDOM.render(
  <ProfileList profiles={profiles} />,
  document.getElementById('root')
);

