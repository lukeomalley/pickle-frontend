import gql from 'graphql-tag';

export default gql`
  query PICKLE_QUERY($id: Int!) {
    pickle(id: $id) {
      description
      user {
        id
        username
        imgUrl
      }
      category {
        id
        name
      }
    }
  }
`;
