import React from 'react';
import styled from 'styled-components';
import { DPIconSpinner } from '../icons';

const Spinner = () => {
  return (
    <SpinnerContainer>
      <DPIconSpinner className="spinner" />
    </SpinnerContainer>
  );
};

export default Spinner;

const SpinnerContainer = styled.span`
  .spinner {
    animation: rotation 0.6s linear infinite;
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
