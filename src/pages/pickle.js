import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import PICKLE_QUERY from '../queries/PICKLE_QUERY';
import Nav from '../components/globals/Nav';
import { sizes } from '../styles';
import PicklePageContainer from '../components/PickleShow/PicklePageContainer';

const PicklePageWrapper = styled.div`
  width: ${props => props.theme.mainWidth};
  margin: 0 auto;

  @media (max-width: ${sizes.phone}px) {
    width: 100vw;
  }
`;

const ProfilePage = ({ match }) => {
  let { id } = match.params;
  id = parseInt(id, 10);
  const { loading, data, error } = useQuery(PICKLE_QUERY, { variables: { id } });
  if (loading) return null;
  if (error) return <div>Error</div>;
  return (
    <>
      <Nav />
      <PicklePageWrapper>
        <PicklePageContainer pickle={data.pickle} />
      </PicklePageWrapper>
    </>
  );
};

export default ProfilePage;
