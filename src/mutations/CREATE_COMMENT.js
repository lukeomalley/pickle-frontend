import gql from 'graphql-tag';

export default gql`
  mutation CREATE_COMMENT($pickle_id: Int!, $text: String!) {
    createComment(input: { pickleId: $pickle_id, text: $text }) {
      pickle {
        id
        description
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
  }
`;
