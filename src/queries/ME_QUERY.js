import gql from 'graphql-tag';

export default gql`
  query ME {
    me {
      id
      name
      username
    }
  }
`;
