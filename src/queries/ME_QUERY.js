import gql from 'graphql-tag';

export default gql`
  query ME {
    me {
      id
      name
      username
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
