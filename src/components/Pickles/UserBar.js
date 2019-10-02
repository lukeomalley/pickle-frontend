import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { FaTrash } from 'react-icons/fa';

import profilePic from '../../static/defaultProfile.png';
import ME_QUERY from '../../queries/ME_QUERY';
import { useModal } from '../globals/useModal';
import { setRem } from '../../styles';
import ConfirmDeleteModal from '../globals/ConfirmDeleteModal';

const UserBar = ({ user, pickle }) => {
  const { isShowing, toggle } = useModal();

  const token = localStorage.getItem('token');

  const {
    data: { me },
    loading,
    error,
  } = useQuery(ME_QUERY);

  if (loading) return null;
  if (error) return null;
  return (
    <>
      <UserBarWrapper>
        <div className="user-details">
          <img src={user.imgUrl || profilePic} alt={user.name} />
          <Link to={`/${user.username}`}>{user.username}</Link>
        </div>
        {token ? me.id === user.id && <FaTrash className="trash" onClick={toggle} /> : null}
      </UserBarWrapper>
      <ConfirmDeleteModal
        isShowing={isShowing}
        hide={toggle}
        message="Are you sure you want to delete this post"
        pickle={pickle}
      />
    </>
  );
};

const UserBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${setRem(8)};

  .trash {
    cursor: pointer;
  }

  .user-details {
    display: flex;
    align-items: center;
  }
  img {
    width: ${setRem(30)};
    height: ${setRem(30)};
    border-radius: 50%;
  }

  a {
    font-weight: bold;
    text-decoration: none;
    color: ${props => props.theme.primaryFontColor};
    justify-self: start;
    margin-left: ${setRem(16)};
  }
`;

export default UserBar;
