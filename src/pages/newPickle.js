import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import ALL_CATEGORIES_QUERY from '../queries/ALL_CATEGORIES_QUERY';
import NewPickleForm from '../components/NewPickle/NewPickleForm';
import { sizes } from '../styles';
import Nav from '../components/globals/Nav';

const NewPicklePageWrapper = styled.div`
  width: ${props => props.theme.mainWidth};
  margin: 0 auto;

  @media (max-width: ${sizes.phone}px) {
    width: 100vw;
  }
`;

const NewPicklePage = () => {
  const { data, loading, error } = useQuery(ALL_CATEGORIES_QUERY);

  if (loading) return null;
  if (error) return <div>Error</div>;
  return (
    <>
      <Nav />
      <NewPicklePageWrapper>
        <NewPickleForm categories={data.categories} />
      </NewPicklePageWrapper>
    </>
  );
};

export default NewPicklePage;
