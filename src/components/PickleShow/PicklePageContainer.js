import React from 'react';
import styled from 'styled-components';

import WholePickle from './WholePickle';

const PicklePageContainerWrapper = styled.div``;

const PicklePageContainer = ({ pickle }) => {
  return (
    <PicklePageContainerWrapper>
      <WholePickle pickle={pickle} />
    </PicklePageContainerWrapper>
  );
};

export default PicklePageContainer;
