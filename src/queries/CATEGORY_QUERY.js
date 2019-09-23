import gql from 'graphql-tag';

export default gql`
  query CATEGORY_QUERY($name: String!) {
    category(name: $name) {
      id
      name
      pickles {
        id
        description
        category {
          id
          name
        }
        options {
          id
          text
        }
        user {
          id
          username
          imgUrl
        }
        comments {
          id
          text
          user {
            id
            username
          }
        }
      }
    }
  }
`;
