import React from 'react';
import styled from 'styled-components';
import {
  FONTSIZES,
  FONTWEIGHTS,
} from '../../pages/CheckoutPage/constatnts/font-size';
import DashboardTable from '../DashboardTable';
import Footer from '../Footer';

const PendingComponent = ({ paidEmails, data, noOfPaidEmails, totalEmail }) => {
  const paidAmount = data?.amountPaid;
  const totalPrice = data?.totalPrice;
  const owedAmount = totalPrice - paidAmount;
  const NoUserPaid = noOfPaidEmails === 0;

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
      <DashboardTable
        paidAmount={paidAmount}
        owedAmount={owedAmount}
        noOfPaidEmails={noOfPaidEmails}
        totalEmail={totalEmail}
        totalPrice={totalPrice}
      />
      <Footer />
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
