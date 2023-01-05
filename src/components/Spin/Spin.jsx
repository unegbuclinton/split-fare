import React from 'react';
import styled from 'styled-components';
import { DPIconSpin } from '../../icons';

const Spin = () => {
  return (
    <SpinnerContainer>
      <DPIconSpin className="spinner" />
    </SpinnerContainer>
  );
};

export default Spin;

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
