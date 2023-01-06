import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import {
  FONTSIZES,
  FONTWEIGHTS,
} from '../../pages/CheckoutPage/constatnts/font-size';

const Footer = () => {
  const naviagte = useNavigate();
  return (
    <FooterContainer>
      <button onClick={() => naviagte('/approval')}>Settle Up</button>
      <button onClick={() => naviagte('/')}>Cancel</button>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;

  button {
    font-size: ${FONTSIZES.xlarge};
    color: #fff;
    font-weight: ${FONTWEIGHTS.bold};
    padding: 1.45rem 3.2rem;
    border-radius: 0.5rem;
    border: none;
    background: rgba(231, 22, 22, 0.78);
  }

  & > button:first-child {
    background: rgba(51, 170, 31, 0.78);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
