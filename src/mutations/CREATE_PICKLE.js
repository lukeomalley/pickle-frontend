import gql from 'graphql-tag';

export default gql`
  mutation CREATE_PICKLE($categoryId: Int!, $description: String!) {
    createPickle(input: { categoryId: $categoryId, description: $description }) {
      pickle {
        id
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
  }
`;
