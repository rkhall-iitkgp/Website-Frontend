import React from 'react';
import ProfileCardHeads from './ProfileCardHeads';


function ProfileList(props) {
  return (
    <div className='profile-container'>
      <div className="profile-list">
        {props.profiles.map(profile => (
          <ProfileCardHeads
            key={profile.id}
            classStyle={profile.classStyle}
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

export default ProfileList;