import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DPIconApproved } from '../../icons';
import { FONTSIZES, FONTWEIGHTS } from '../CheckoutPage/constatnts/font-size';

const ApprovalPage = () => {
  return (
    <Wrapper>
      <DPIconApproved />
      <ApprovalText>Payment successfully completed</ApprovalText>
      <Link to="/" className="link">
        <RedirectText>Go to email</RedirectText>
      </Link>
    </Wrapper>
  );
};

export default ApprovalPage;

const Wrapper = styled.div`
  max-width: 55rem;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .link {
    text-decoration: none;
  }
`;

const ApprovalText = styled.h2`
  font-size: ${FONTSIZES.xxlarge};
  text-align: center;
  margin-top: 1.6rem;
  max-width: 25rem;
`;

const RedirectText = styled.p`
  font-size: ${FONTSIZES.small};
  color: #007aff;
  font-weight: ${FONTWEIGHTS.bold};
  margin-top: 3.2rem;
`;
