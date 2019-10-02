import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';

import { PrimaryButton } from '../globals/Buttons';
import DELETE_COMMENT from '../../mutations/DELETE_COMMENT';
import ALL_PICKLE_QUERY from '../../queries/ALL_PICKLE_QUERY';
import { setRem } from '../../styles';

const DeleteCommentModal = ({ comment, message, isShowing, hide }) => {
  const [deleteComment] = useMutation(DELETE_COMMENT);

  const handleDelete = () => {
    const commentId = parseInt(comment.id);
    deleteComment({
      variables: { id: commentId },
      update: (store, { data }) => {
        const { pickles } = store.readQuery(ALL_PICKLE_QUERY);
        store.writeQuery({
          query: ALL_PICKLE_QUERY,
          data: {
            pickles: pickles.map(pickle => (pickle.id === data.pickle.id ? data.pickle : pickle)),
          },
        });
      },
    });
    hide();
  };

  return isShowing
    ? ReactDOM.createPortal(
        <>
          <ModalWrapper>
            <h4>{message}</h4>
            <div className="buttons">
              <PrimaryButton onClick={hide}>Close</PrimaryButton>
              <PrimaryButton onClick={handleDelete}>Delete</PrimaryButton>
            </div>
          </ModalWrapper>
          <ModalOverley onClick={hide} />
        </>,
        document.body,
      )
    : null;
};

const ModalWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  background: ${props => props.theme.mainWhite};
  padding: ${setRem(50)} ${setRem(100)};
  max-width: 100%;
  max-height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  h4 {
    margin-bottom: ${setRem(20)};
  }

  .buttons {
    display: grid;
    justify-self: center;
    grid-template-columns: 1fr 1fr;
  }
`;

const ModalOverley = styled.div`
  z-index: 990;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default DeleteCommentModal;
