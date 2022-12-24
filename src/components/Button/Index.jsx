import React from 'react';
import styled from 'styled-components';
import { FONTWEIGHTS } from '../../pages/CheckoutPage/constatnts/font-size';

const Button = ({ text, onClick }) => {
  return <ButtonComp onClick={onClick}>{text}</ButtonComp>;
};

export default Button;

const ButtonComp = styled.button`
  width: 100%;
  border-radius: 0.8rem;
  background-color: #000;
  color: #fff;
  padding: 1.4rem 0;
  border: none;
  font-weight: ${FONTWEIGHTS.bold};
`;
