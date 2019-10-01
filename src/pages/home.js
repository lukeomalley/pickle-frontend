import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import NewsFeedContainer from '../components/NewsFeed/NewsFeedContainer';
import ALL_PICKLE_QUERY from '../queries/ALL_PICKLE_QUERY';
import { sizes, setRem } from '../styles';
import Nav from '../components/globals/Nav';
import { PrimaryButton } from '../components/globals/Buttons';

const HomeWrapper = styled.div`
  width: ${props => props.theme.mainWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .refresh {
    margin: 0 auto;
    margin-bottom: ${setRem(20)};
  }

  @media (max-width: ${sizes.phablet}px) {
    width: 100vw;
  }
`;

const HomePage = () => {
  const { loading, data, error, refetch } = useQuery(ALL_PICKLE_QUERY);
  if (loading) return null;
  if (error) return null;
  return (
    <>
      <Nav />
      <HomeWrapper>
        <PrimaryButton className="refresh" onClick={() => refetch()}>
          Refresh Feed
        </PrimaryButton>
        <NewsFeedContainer pickles={data.pickles} />
      </HomeWrapper>
    </>
  );
};

export default HomePage;
