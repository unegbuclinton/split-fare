import React from 'react';
import styled from 'styled-components';
import {
  FONTSIZES,
  FONTWEIGHTS,
} from '../../pages/CheckoutPage/constatnts/font-size';

const DashboardTable = ({
  paidAmount,
  owedAmount,
  totalEmail,
  noOfPaidEmails,
  totalPrice,
}) => {
  return (
    <CellWrapper>
      <div className="cell">
        <p className="cell-header">Paid</p>
        <p className="cell-value">{`$${paidAmount}`}</p>
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
  );
};

export default DashboardTable;

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
