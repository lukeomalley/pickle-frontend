import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import CATEGORY_QUERY from '../queries/CATEGORY_QUERY';
import CategoryPageContainer from '../components/Browse/CategoryPageContainer';
import { sizes } from '../styles';
import Nav from '../components/globals/Nav';

const CategoryPageWrapper = styled.div`
  width: ${props => props.theme.mainWidth};
  margin: 0 auto;

  @media (max-width: ${sizes.phone}px) {
    width: 100vw;
  }
`;

const CategoryPage = ({ match }) => {
  const { category } = match.params;
  const { loading, data, error } = useQuery(CATEGORY_QUERY, { variables: { name: category } });
  if (loading) return null;
  if (error) return <div>Error</div>;
  return (
    <>
      <Nav />
      <CategoryPageWrapper>
        <CategoryPageContainer category={data.category} />
      </CategoryPageWrapper>
    </>
  );
};

export default CategoryPage;
