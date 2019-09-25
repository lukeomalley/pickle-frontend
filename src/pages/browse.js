import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

import ALL_CATEGORIES_QUERY from '../queries/ALL_CATEGORIES_QUERY';
import CategoriesContainer from '../components/Browse/CategoriesContainer';
import Title from '../components/globals/Title';
import Nav from '../components/globals/Nav';
import { sizes } from '../styles';

const BrowsePageWrapper = styled.div`
  width: ${props => props.theme.mainWidth};
  margin: 0 auto;

  @media (max-width: ${sizes.phablet}px) {
    width: 100vw;
  }
`;

const BrowsePage = () => {
  const { data, error, loading } = useQuery(ALL_CATEGORIES_QUERY);
  if (loading) return null;
  if (error) return <div>Error</div>;
  return (
    <>
      <Nav />
      <BrowsePageWrapper>
        <Title title="pickles " subtitle="by category"></Title>
        <CategoriesContainer categories={data.categories} />
      </BrowsePageWrapper>
    </>
  );
};

export default BrowsePage;
