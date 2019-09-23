import React from 'react';

import UserProfileHeader from './UserProfileHeader';
import NewsFeedContainer from '../NewsFeed/NewsFeedContainer';
import Hr from '../globals/HorizontalRule';

const ProfilePageContainer = ({ user }) => {
  return (
    <>
      <UserProfileHeader user={user} />
      <Hr marginBottom={20} />
      <NewsFeedContainer pickles={user.pickles} />
    </>
  );
};

export default ProfilePageContainer;
