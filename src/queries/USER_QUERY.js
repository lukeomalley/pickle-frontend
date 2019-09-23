import gql from 'graphql-tag';

export default gql`
  query USER_QUERY($username: String!) {
    user(username: $username) {
      id
      name
      username
      bio
      imgUrl
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
