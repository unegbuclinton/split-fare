import React from 'react';
import styled from 'styled-components';
import {
  FONTSIZES,
  FONTWEIGHTS,
} from '../../pages/CheckoutPage/constatnts/font-size';

const PendingComponent = ({ data }) => {
  const { invites } = data;

  return (
    <Wrapper>
      <Header>
        <p>Name</p>
        <p>Amount</p>
        <p>Status</p>
      </Header>
      <TableContainer>
        {Object.keys(invites).map((i, index) => {
          return (
            <TableData>
              <p key={index}>{invites[i]}</p>
              <p>3,000</p>
              <p>paid</p>
            </TableData>
          );
        })}
      </TableContainer>
    </Wrapper>
  );
};

export default PendingComponent;

const Wrapper = styled.div`
  padding: 2rem;
  background-color: rgba(88, 168, 248, 0.78);
  border-radius: 1.5rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  p {
    font-size: ${FONTSIZES.small};
    color: #fff;
    font-weight: ${FONTWEIGHTS.bold};
  }
`;

const TableData = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.2rem 2rem;
    background-color: #fff;
    font-size: ${FONTSIZES.xsmall};
    font-weight: ${FONTWEIGHTS.bold};
    border-radius: 3rem;
    color: #808080;
  }
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
