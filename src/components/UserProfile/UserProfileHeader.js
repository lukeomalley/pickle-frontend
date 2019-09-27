import React from 'react';
import styled from 'styled-components';
import profilePic from '../../static/defaultProfile.png';
import { FaCog } from 'react-icons/fa';

import { setRem, sizes } from '../../styles';

const UserProfileHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: center;
  grid-gap: ${setRem(100)};
  margin-bottom: ${setRem(20)};

  span {
    font-size: ${setRem(18)};
    cursor: pointer;
  }

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
      align-items: center;
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

const UserProfileHeader = ({ user, pickles, me, showEdit, toggleShowEdit }) => {
  const isMyProfile = user.id === me.id;
  return (
    <UserProfileHeaderWrapper>
      <img src={user.imgUrl || profilePic} alt="" />
      <div className="details">
        <p className="username">
          {user.username}{' '}
          {isMyProfile && (
            <span>
              <FaCog onClick={() => toggleShowEdit(!showEdit)}>Edit Profile</FaCog>
            </span>
          )}
        </p>
        <p>{user.name}</p>
        <p>{pickles.length} Pickles</p>
        <p>{user.bio}</p>
      </div>
    </UserProfileHeaderWrapper>
  );
};

export default UserProfileHeader;
