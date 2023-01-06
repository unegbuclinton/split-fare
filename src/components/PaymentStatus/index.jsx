import React from 'react';
import styled from 'styled-components';
import { FONTSIZES } from '../../pages/CheckoutPage/constatnts/font-size';
import DashboardTable from '../DashboardTable';
import Footer from '../Footer';
import Spinner from '../Spinner/Spinner';

const PaymentStatus = ({
  totalEmailInvited,
  noOfPaidEmails,
  totalEmail,
  data,
  loadingState,
  owner,
}) => {
  const paidAmount = data?.amountPaid;
  const totalPrice = data?.totalPrice;
  const owedAmount = totalPrice - paidAmount;

  return (
    <Wrapper>
      <EmailContainer>
        <EmailField>{owner}</EmailField>
        {Object?.keys(totalEmailInvited)?.map((i, index) => {
          return <EmailField key={index}>{totalEmailInvited[i]}</EmailField>;
        })}
      </EmailContainer>

      {loadingState ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        <DashboardTable
          paidAmount={paidAmount}
          owedAmount={owedAmount}
          noOfPaidEmails={noOfPaidEmails}
          totalEmail={totalEmail}
          totalPrice={totalPrice}
        />
      )}

      <Footer />
    </Wrapper>
  );
};

export default PaymentStatus;

const Wrapper = styled.div``;

const EmailField = styled.div`
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 0.6rem;
  font-size: ${FONTSIZES.base};
  color: #808080;
  margin-bottom: 1.5rem;
`;

const EmailContainer = styled.div`
  padding: 2rem;
  background-color: rgba(88, 168, 248, 0.78);
  border-radius: 2rem;
  margin-bottom: 2rem;
`;

const SpinnerContainer = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
