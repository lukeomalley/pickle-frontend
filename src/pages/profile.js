import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import Nav from '../components/globals/Nav';
import USER_QUERY from '../queries/USER_QUERY';
import ProfilePageContainer from '../components/UserProfile/ProfilePageContainer';
import { sizes } from '../styles';

const ProfilePageWrapper = styled.div`
  width: ${props => props.theme.mainWidth};
  margin: 0 auto;

  @media (max-width: ${sizes.phone}px) {
    width: 100vw;
  }
`;

const ProfilePage = ({ match }) => {
  const { username } = match.params;
  const { loading, data, error } = useQuery(USER_QUERY, { variables: { username } });
  if (loading) return null;
  if (error) return <div>Error</div>;
  return (
    <>
      <Nav />
      <ProfilePageWrapper>
        <ProfilePageContainer user={data.user} />
      </ProfilePageWrapper>
    </>
  );
};

export default ProfilePage;
