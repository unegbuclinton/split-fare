import React from 'react';
import styled from 'styled-components';
import { DPIconCardIcon } from '../../icons';

const CheckoutInput = () => {
  return (
    <Wrapper>
      <InputField placeholder="Card number" />
      <DPIconCardIcon className="input-icon" />
    </Wrapper>
  );
};

export default CheckoutInput;

const Wrapper = styled.div`
  position: relative;

  .input-icon {
    position: absolute;
    top: 1.3rem;
    left: 1.5rem;
  }
`;

const InputField = styled.input`
  width: 100%;
  height: 4.8rem;
  background-color: #f2f2f2;
  border: none;
  border-radius: 0.6rem;
  padding-left: 5rem;
  font-size: 2rem;
`;
