import gql from 'graphql-tag';

export default gql`
  query ALL_PICKLE_QUERY {
    pickles {
      id
      description
      votes
      category {
        id
        name
      }
      options {
        id
        text
        percentage
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
