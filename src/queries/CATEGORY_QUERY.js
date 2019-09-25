import gql from 'graphql-tag';

export default gql`
  query CATEGORY_QUERY($name: String!) {
    category(name: $name) {
      id
      name
    }
  }
`;
