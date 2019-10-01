import gql from 'graphql-tag';

export default gql`
  mutation CREATE_SELECTION($optionId: Int!) {
    createSelection(input: { optionId: $optionId }) {
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
    }
  }
`;
