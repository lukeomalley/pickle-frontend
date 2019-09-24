import gql from 'graphql-tag';

export default gql`
  mutation CREATE_USER(
    $name: String!
    $username: String!
    $password: String!
    $bio: String
    $imgUrl: String
  ) {
    createUser(
      input: { name: $name, username: $username, password: $password, bio: $bio, imgUrl: $imgUrl }
    ) {
      token
      errors
      user {
        id
        name
        username
        imgUrl
      }
    }
  }
`;
