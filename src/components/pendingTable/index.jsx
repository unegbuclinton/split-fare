import React from 'react';
import styled from 'styled-components';
import {
  FONTSIZES,
  FONTWEIGHTS,
} from '../../pages/CheckoutPage/constatnts/font-size';
import Spinner from '../Spinner/Spinner';

const PendingComponent = ({
  loadingState,
  paidEmails,
  data,
  noOfPaidEmails,
  totalEmail,
}) => {
  const paidAmount = data.amountPaid;
  const totalPrice = data.totalPrice;
  const owedAmount = totalPrice - paidAmount;
  const NoUserPaid = noOfPaidEmails === 0;

  if (loadingState) {
    return (
      <SpinnerContainer>
        <Spinner />;
      </SpinnerContainer>
    );
  }

  return (
    <>
      <Emailcontainer>
        {NoUserPaid ? (
          <div className="alert">No User Has paid yet</div>
        ) : (
          Object?.keys(paidEmails)?.map((i, index) => {
            return <EmailField key={index}>{paidEmails[i]}</EmailField>;
          })
        )}
      </Emailcontainer>

      <CellWrapper>
        <div className="cell">
          <p className="cell-header">Paid</p>
          <p className="cell-value">{`$${paidAmount.toString()}`}</p>
        </div>
        <div className="cell">
          <p className="cell-header">Owed</p>
          <p className="cell-value">{`$${owedAmount}`}</p>
        </div>
        <div className="cell">
          <p className="cell-header">Users Paid</p>
          <p className="cell-value">
            {noOfPaidEmails}/{totalEmail + 1}
          </p>
        </div>
        <div className="cell">
          <p className="cell-header">Total</p>
          <p className="cell-value">{`$${totalPrice}`}</p>
        </div>
      </CellWrapper>
      <Footer>
        <button>Settle Up</button>
        <button>Cancel</button>
      </Footer>
    </>
  );
};

export default PendingComponent;

const Emailcontainer = styled.div`
  padding: 2rem;
  background-color: rgba(88, 168, 248, 0.78);
  border-radius: 2rem;
  margin-bottom: 2rem;

  .alert {
    font-size: ${FONTSIZES.xlarge};
    font-weight: ${FONTWEIGHTS.medium};
    color: #fff;
  }
`;
const EmailField = styled.div`
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 0.6rem;
  font-size: ${FONTSIZES.base};
  color: #808080;
  margin-bottom: 1.5rem;
`;

const CellWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 2rem;

  .cell {
    width: 50%;
    padding: 2rem;
    border: 1px solid #fff;
    background-color: rgba(88, 168, 248, 0.78);
    font-size: ${FONTSIZES.xlarge};
    color: #fff;

    .cell-header {
      font-weight: ${FONTWEIGHTS.bold};
    }
    .cell-value {
      text-align: center;
      margin-top: 1rem;
    }

    &:first-child {
      border-top-left-radius: 2rem;
    }

    &:nth-child(2) {
      border-top-right-radius: 2rem;
    }
    &:nth-child(3) {
      border-bottom-left-radius: 2rem;
    }
    &:nth-child(4) {
      border-bottom-right-radius: 2rem;
    }
  }
`;

const SpinnerContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
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
