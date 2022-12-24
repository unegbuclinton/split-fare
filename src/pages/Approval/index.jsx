import React from 'react';
import styled from 'styled-components';
import { DPIconApproved } from '../../icons';
import { FONTSIZES, FONTWEIGHTS } from '../CheckoutPage/constatnts/font-size';

const ApprovalPage = () => {
  return (
    <Wrapper>
      <DPIconApproved />
      <ApprovalText>Payment successfully completed</ApprovalText>
      <RedirectText>Go to email</RedirectText>
    </Wrapper>
  );
};

export default ApprovalPage;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ApprovalText = styled.h2`
  font-size: ${FONTSIZES.xxlarge};
  text-align: center;
  margin-top: 1.6rem;
`;

const RedirectText = styled.p`
  font-size: ${FONTSIZES.small};
  color: #007aff;
  font-weight: ${FONTWEIGHTS.bold};
  margin-top: 3.2rem;
`;
