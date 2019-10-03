import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { FaTimes } from 'react-icons/fa';

import { setRem, fadeIn } from '../../styles';
import ME_QUERY from '../../queries/ME_QUERY';
import { useModal } from '../globals/useModal';
import DeleteCommentModal from '../globals/DeleteCommentModal';

const CommentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-wrap: break-word;
  ${fadeIn('0%', '0%', '0%', 0.2)}

  span {
    font-weight: bolder;
    cursor: pointer;
    margin-right: ${setRem(8)};
  }

  svg {
    margin-top: ${setRem(3)};
    cursor: pointer;
  }
`;

const Comment = ({ comment }) => {
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
      <CommentWrapper>
        <div>
          <span>
            <Link to={`/${comment.user.username}`}>{comment.user.username}</Link>
          </span>
          {comment.text}
        </div>
        {token && me.id === comment.user.id && <FaTimes onClick={toggle} />}
      </CommentWrapper>
      <DeleteCommentModal
        comment={comment}
        message="Are you sure you want to delete this comment?"
        isShowing={isShowing}
        hide={toggle}
      />
    </>
  );
};

export default Comment;
