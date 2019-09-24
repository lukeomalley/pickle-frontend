import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import UserProfileHeader from './UserProfileHeader';
import NewsFeedContainer from '../NewsFeed/NewsFeedContainer';
import Hr from '../globals/HorizontalRule';
import ALL_PICKLE_QUERY from '../../queries/ALL_PICKLE_QUERY';

const ProfilePageContainer = ({ user }) => {
  const { data, loading, error } = useQuery(ALL_PICKLE_QUERY);

  const filteredPickles = () => {
    return data.pickles.filter(pickle => pickle.user.id === user.id);
  };

  if (loading) return null;
  if (error) return <div>Error</div>;
  return (
    <>
      <UserProfileHeader user={user} />
      <Hr marginBottom={20} />
      <NewsFeedContainer pickles={filteredPickles()} />
    </>
  );
};

export default ProfilePageContainer;
