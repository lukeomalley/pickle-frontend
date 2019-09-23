import gql from 'graphql-tag';

export default gql`
  query ALL_PICKLE_QUERY {
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
`;
