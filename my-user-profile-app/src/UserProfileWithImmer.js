import React, { useState } from 'react';
import { useImmer } from 'use-immer';
import './UserProfileWithImmer.css'; 

function UserProfileWithImmer() {
  const [userProfile, updateUserProfile] = useImmer({
    name: '',
    email: '',
    contactDetails: {
      phone: '',
      address: '',
    },
    preferences: {
      newsletter: false,
      notifications: false,
    },
  });

  // Temporary states for input fields before updating
  const [tempName, setTempName] = useState('');
  const [tempEmail, setTempEmail] = useState('');
  const [tempPhone, setTempPhone] = useState('');
  const [tempAddress, setTempAddress] = useState('');

  const handleSubmit = () => {
    updateUserProfile(draft => {
      draft.name = tempName;
      draft.email = tempEmail;
      draft.contactDetails.phone = tempPhone;
      draft.contactDetails.address = tempAddress;
    });
  };

  const toggleNewsletterSubscription = () => {
    updateUserProfile(draft => {
      draft.preferences.newsletter = !draft.preferences.newsletter;
    });
  };

  const toggleNotificationPreferences = () => {
    updateUserProfile(draft => {
      draft.preferences.notifications = !draft.preferences.notifications;
    });
  };

  return (
    <div className="user-profile">
    
      <div className="heading top-heading">Please input your data</div>

      <input
        className="input"
        value={tempName}
        onChange={(e) => setTempName(e.target.value)}
        placeholder="Name"
      />
      <input
        className="input"
        value={tempEmail}
        onChange={(e) => setTempEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        className="input"
        value={tempPhone}
        onChange={(e) => setTempPhone(e.target.value)}
        placeholder="Phone Number"
      />
      <input
        className="input"
        value={tempAddress}
        onChange={(e) => setTempAddress(e.target.value)}
        placeholder="Address"
      />
      <button className="button" onClick={handleSubmit}>Submit</button>
      
      <button className="button" onClick={toggleNewsletterSubscription}>
        {userProfile.preferences.newsletter ? 'Unsubscribe from Newsletter' : 'Subscribe to Newsletter'}
      </button>
      <button className="button" onClick={toggleNotificationPreferences}>
        {userProfile.preferences.notifications ? 'Disable Notifications' : 'Enable Notifications'}
      </button>

      <div className="heading">Profile Info:</div>
      <div className="profile-display">
        <div>Name: {userProfile.name}</div>
        <div>Email: {userProfile.email}</div>
        <div>Phone: {userProfile.contactDetails.phone}</div>
        <div>Address: {userProfile.contactDetails.address}</div>
        <div>Newsletter: {userProfile.preferences.newsletter ? 'Subscribed' : 'Not Subscribed'}</div>
        <div>Notifications: {userProfile.preferences.notifications ? 'Enabled' : 'Disabled'}</div>
      </div>
    </div>
  );
}

export default UserProfileWithImmer;
