import gql from 'graphql-tag';

export default gql`
  query USER_QUERY($username: String!) {
    user(username: $username) {
      id
      name
      username
      bio
      imgUrl
    }
  }
`;
