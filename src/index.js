import React from 'react';
import ReactDOM from 'react-dom';
import ProfileList from './App';
import profiles from './profiles.json';

ReactDOM.render(
  <ProfileList profiles={profiles} />,
  document.getElementById('root')
);

