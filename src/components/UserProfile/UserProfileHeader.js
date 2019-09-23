import React from 'react';
import styled from 'styled-components';

import { setRem, sizes } from '../../lib/styles';

const UserProfileHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: center;
  grid-gap: ${setRem(100)};
  margin-bottom: ${setRem(20)};

  img {
    height: 150px;
    width: 150px;
    overflow: hidden;
    border-radius: 50%;
  }

  .details {
    justify-self: left;
    text-align: left;

    .username {
      margin-bottom: ${setRem(20)};
      font-size: ${setRem(30)};
    }
  }

  @media (max-width: ${sizes.tablet}px) {
    width: 90%;
    margin: 0 auto;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-gap: ${setRem(20)};

    .details {
      justify-self: center;
      text-align: center;
      margin-bottom: ${setRem(20)};
    }
  }
`;

const UserProfileHeader = ({ user }) => {
  return (
    <UserProfileHeaderWrapper>
      <img src={user.imgUrl} alt="" />
      <div className="details">
        <p className="username">{user.username}</p>
        <p>{user.pickles.length} Pickles</p>
        <p>{user.bio}</p>
      </div>
    </UserProfileHeaderWrapper>
  );
};

export default UserProfileHeader;
