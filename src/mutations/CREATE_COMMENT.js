import gql from 'graphql-tag';

export default gql`
  mutation CREATE_COMMENT($pickle_id: Int!, $text: String!) {
    createComment(input: { pickleId: $pickle_id, text: $text }) {
      comment {
        id
        text
        user {
          id
          imgUrl
          name
          username
        }
      }
    }
  }
`;
