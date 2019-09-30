import gql from 'graphql-tag';

export default gql`
  query TRENDING_PICKLES {
    trendingPickles {
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
`;
