import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Index';
import CheckoutInput from '../../components/CheckoutInpIt';
import PaymentCard from '../../components/paymentCards';
import { DPIcoropDown } from '../../icons';
import { FONTSIZES, FONTWEIGHTS } from './constatnts/font-size';

const Checkout = () => {
  return (
    <Wrapper>
      <div className="text-container">
        <CheckoutText>Uniqlo Spain</CheckoutText>
        <CheckoutText>Order №070490</CheckoutText>
      </div>
      <HeaderText>
        100.00 $ <DPIcoropDown />
      </HeaderText>
      <CheckoutInput />
      <Divider />
      <CheckoutText>Other Payment Methods</CheckoutText>
      <PaymentCard />

      <Footer>
        <Button text="Pay 100.00 $" />
      </Footer>
    </Wrapper>
  );
};

export default Checkout;

const Wrapper = styled.div`
  position: relative;
  padding: 5.2rem 1.9rem;
  height: 100vh;
  .text-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.4rem;
  }
`;

const Divider = styled.div`
  width: 100%;
  border: 1px solid #e5e5e5;
  margin: 3.2rem 0;
`;

const CheckoutText = styled.p`
  font-size: ${FONTSIZES.small};
`;

const HeaderText = styled.h1`
  font-size: 3.2rem;
  font-weight: ${FONTWEIGHTS.medium};
  margin-bottom: 1rem;
`;

const Footer = styled.footer`
  width: 90%;
  position: absolute;
  bottom: 10px;
  border-top: 1px solid #e5e5e5;
  padding-top: 1rem;
`;
