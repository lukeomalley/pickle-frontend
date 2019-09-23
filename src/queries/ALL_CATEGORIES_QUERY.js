import gql from 'graphql-tag';

export default gql`
  query ALL_CATEGORY_QUERY {
    categories {
      id
      name
    }
  }
`;
