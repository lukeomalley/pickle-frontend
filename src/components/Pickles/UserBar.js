import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { setRem } from '../../styles';

const UserBarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${setRem(8)};

  img {
    width: ${setRem(30)};
    height: ${setRem(30)};
    border-radius: 50%;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.primaryFontColor};
    justify-self: start;
    margin-left: ${setRem(16)};
  }
`;

const UserBar = ({ user }) => {
  return (
    <UserBarWrapper>
      <img src={user.imgUrl} alt={user.name} />
      <Link to={`/${user.username}`}>{user.username}</Link>
    </UserBarWrapper>
  );
};

export default UserBar;
