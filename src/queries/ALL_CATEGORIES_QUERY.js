import { gql } from 'apollo-boost';

export default gql`
  query ALL_CATEGORY_QUERY {
    categories {
      id
      name
    }
  }
`;
