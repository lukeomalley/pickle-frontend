import gql from 'graphql-tag';

export default gql`
  mutation DELETE_PICKLE($pickleId: Int!) {
    deletePickle(input: { pickleId: $pickleId }) {
      pickle {
        id
      }
      errors
    }
  }
`;
