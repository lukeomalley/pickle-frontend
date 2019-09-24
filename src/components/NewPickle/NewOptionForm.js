import React, { useState } from 'react';
import styled from 'styled-components';

const NewOptionForm = () => {
  const [text, setText] = useState('');
  return (
    <NewOptionFormWrapper>
      <input type="text" placeholder="Choice" />
    </NewOptionFormWrapper>
  );
};

const NewOptionFormWrapper = styled.form``;

export default NewOptionForm;
