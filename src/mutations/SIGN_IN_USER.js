import gql from 'graphql-tag';

export default gql`
  mutation SIGN_IN_USER($username: String!, $password: String!) {
    signInUser(input: { username: $username, password: $password }) {
      token
      user {
        id
        username
      }
      errors
    }
  }
`;
