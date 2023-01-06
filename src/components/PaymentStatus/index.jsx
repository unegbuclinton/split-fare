import React from 'react';
import styled from 'styled-components';
import { FONTSIZES } from '../../pages/CheckoutPage/constatnts/font-size';

const PaymentStatus = ({ totalEmail, owner }) => {
  return (
    <Wrapper>
      <EmailField>{owner}</EmailField>
      {Object?.keys(totalEmail)?.map((i, index) => {
        return <EmailField key={index}>{totalEmail[i]}</EmailField>;
      })}
    </Wrapper>
  );
};

export default PaymentStatus;

const Wrapper = styled.div`
  padding: 2rem;
  background-color: rgba(88, 168, 248, 0.78);
  border-radius: 2rem;
  margin-bottom: 2rem;
`;

const EmailField = styled.div`
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 0.6rem;
  font-size: ${FONTSIZES.base};
  color: #808080;
  margin-bottom: 1.5rem;
`;
