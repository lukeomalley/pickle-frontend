import { gql } from 'apollo-boost';

export default gql`
  mutation DELETE_COMMENT($id: Int!) {
    deleteComment(input: { commentId: $id }) {
      pickle {
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
      errors
    }
  }
`;
