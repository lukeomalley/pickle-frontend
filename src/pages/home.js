import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { FaRedo } from 'react-icons/fa';

import NewsFeedContainer from '../components/NewsFeed/NewsFeedContainer';
import ALL_PICKLE_QUERY from '../queries/ALL_PICKLE_QUERY';
import { sizes, setRem, rotate } from '../styles';
import Nav from '../components/globals/Nav';

const HomeWrapper = styled.div`
  width: ${props => props.theme.mainWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .refresh {
    margin: 0 auto;
    margin-bottom: ${setRem(20)};
    font-size: ${setRem(22)};
    cursor: pointer;
  }

  .rotate {
    ${rotate};
  }

  @media (max-width: ${sizes.phablet}px) {
    width: 100vw;
  }
`;

const HomePage = () => {
  const [active, setActive] = useState(false);
  const { loading, data, error, refetch } = useQuery(ALL_PICKLE_QUERY);
  if (loading) return null;
  if (error) return null;

  const handleRefresh = () => {
    setActive(true);
    refetch();
    setTimeout(() => setActive(false), 900);
  };

  return (
    <>
      <Nav />
      <HomeWrapper>
        <FaRedo onClick={handleRefresh} className={`refresh ${active ? 'rotate' : null}`} />
        <NewsFeedContainer pickles={data.pickles} />
      </HomeWrapper>
    </>
  );
};

export default HomePage;
