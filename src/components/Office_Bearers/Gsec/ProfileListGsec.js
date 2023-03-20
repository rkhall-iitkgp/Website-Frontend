import React from 'react';
import ProfileCardGsec from './ProfileCardGsec';

import styles from "../css/ProfileCard.module.css";


function ProfileList(props) {
  return (
    <div className={styles.profileContainer}>
        {props.profiles.map(profile => (
          <ProfileCardGsec
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
  );
}

export default ProfileList;