import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setRem } from '../../styles';

import { PrimaryButton } from './Buttons';

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
  transform: translate(-50%, -150%);
  z-index: 1000;

  h4 {
    margin-bottom: ${setRem(20)};
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

const RequireLoginModal = ({ message, isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <ModalWrapper>
            <h4>{message}</h4>
            <div>
              <PrimaryButton onClick={hide}>Close</PrimaryButton>
              <Link to="/login">
                <PrimaryButton>Login</PrimaryButton>
              </Link>
            </div>
          </ModalWrapper>
          <ModalOverley onClick={hide} />
        </>,
        document.body,
      )
    : null;

export default RequireLoginModal;
