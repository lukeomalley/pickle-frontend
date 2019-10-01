import gql from 'graphql-tag';

export default gql`
  mutation CREATE_PICKLE(
    $categoryId: Int!
    $description: String!
    $optionOne: String
    $optionTwo: String
    $optionThree: String
    $optionFour: String
  ) {
    createPickle(
      input: {
        categoryId: $categoryId
        description: $description
        optionOne: $optionOne
        optionTwo: $optionTwo
        optionThree: $optionThree
        optionFour: $optionFour
      }
    ) {
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
