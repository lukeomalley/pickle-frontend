import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import UserProfileHeader from './UserProfileHeader';
import NewsFeedContainer from '../NewsFeed/NewsFeedContainer';
import EditUserForm from './EditUserForm';
import Hr from '../globals/HorizontalRule';
import ALL_PICKLE_QUERY from '../../queries/ALL_PICKLE_QUERY';
import ME_QUERY from '../../queries/ME_QUERY';

const ProfilePageContainer = ({ user }) => {
  const [showEdit, toggleShowEdit] = useState(false);
  const { data, loading, error } = useQuery(ALL_PICKLE_QUERY);
  const {
    data: { me },
    meError,
    meLoading,
  } = useQuery(ME_QUERY);

  const filteredPickles = () => {
    return data.pickles.filter(pickle => pickle.user.id === user.id);
  };

  if (loading) return null;
  if (error) return null;
  if (meLoading) return null;
  if (meError) return null;

  return (
    <>
      <UserProfileHeader
        user={user}
        pickles={filteredPickles()}
        me={me}
        showEdit={showEdit}
        toggleShowEdit={toggleShowEdit}
      />
      {showEdit ? <EditUserForm toggleShowEdit={toggleShowEdit} showEdit={showEdit} /> : null}
      <Hr marginBottom={20} />
      <NewsFeedContainer pickles={filteredPickles()} />
    </>
  );
};

export default ProfilePageContainer;
