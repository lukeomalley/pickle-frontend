import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';

import { PrimaryButton } from '../globals/Buttons';
import DELETE_PICKLE from '../../mutations/DELETE_PICKLE';
import { setRem } from '../../styles';

const ConfirmDeleteModal = ({ pickle, message, isShowing, hide }) => {
  const [deletePickle, { error, loading }] = useMutation(DELETE_PICKLE);
  const deletePost = () => {
    const pickleId = parseInt(pickle.id, 10);
    deletePickle({ variables: { pickleId } });
    // TODO UPDATE THE CACHE ON DELETE PICKLE
    hide();
  };

  return isShowing
    ? ReactDOM.createPortal(
        <>
          <ModalWrapper>
            <h4>{message}</h4>
            <div className="buttons">
              <PrimaryButton onClick={hide}>Close</PrimaryButton>
              <PrimaryButton onClick={deletePost}>Delete</PrimaryButton>
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
    width: 50%;
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

export default ConfirmDeleteModal;
