import gql from 'graphql-tag';

export default gql`
  mutation SIGN_IN_USER($username: String!, $password: String!) {
    signInUser(input: { username: $username, password: $password }) {
      token
      user {
        id
        name
        username
        email
        bio
        imgUrl
        votedPickles {
          id
          description
        }
        options {
          id
        }
      }
      errors
    }
  }
`;
