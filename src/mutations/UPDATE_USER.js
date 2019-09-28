import gql from 'graphql-tag';

export default gql`
  mutation UPDATE_USER(
    $name: String!
    $username: String!
    $bio: String!
    $email: String!
    $imgUrl: String!
  ) {
    updateUser(
      input: { name: $name, username: $username, bio: $bio, email: $email, imgUrl: $imgUrl }
    ) {
      user {
        id
        name
        username
        bio
        email
        imgUrl
      }
      errors
    }
  }
`;
