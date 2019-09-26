import React from 'react';
import styled from 'styled-components';
import { setRem, fadeIn } from '../../styles';
import { useMutation } from '@apollo/react-hooks';

import { useModal } from '../globals/useModal';
import RequireLoginModal from '../globals/RequireLoginModal';
import CREATE_SELECTION from '../../mutations/CREATE_SELECTION';

const OptionWrapper = styled.div`
  border: 1px solid ${props => props.theme.lightGrey};
  padding: ${setRem(16)} ${setRem(32)};
  cursor: pointer;
  ${fadeIn('0%', '0%', '0%', 0.8)}

  &:hover {
    background: ${props => props.theme.lightGrey};
  }
`;

const PickleOption = ({ option }) => {
  const { isShowing, toggle } = useModal();
  const [createSelection] = useMutation(CREATE_SELECTION, {
    refetchQueries: ['ME'],
  });

  const handleClick = () => {
    if (!localStorage.getItem('token')) {
      toggle();
    } else {
      let id = parseInt(option.id);
      createSelection({
        variables: { optionId: id },
      });
    }
  };

  return (
    <OptionWrapper onClick={handleClick}>
      <div>{option.text}</div>
      <RequireLoginModal
        message="You must be logged in to vote on a pickle"
        isShowing={isShowing}
        hide={toggle}
      />
    </OptionWrapper>
  );
};

export default PickleOption;
