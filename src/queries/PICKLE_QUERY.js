import gql from 'graphql-tag';

export default gql`
  query PICKLE_QUERY($id: Int!) {
    pickle(id: $id) {
      id
      description
      votes
      category {
        id
        name
      }
      options {
        id
        text
        percentage
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
`;
