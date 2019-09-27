import gql from 'graphql-tag';

export default gql`
  query ME {
    me {
      id
      name
      username
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
  }
`;
