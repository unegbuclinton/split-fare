import React from 'react';
import styled from 'styled-components';
import PaymentStatus from '../../components/PaymentStatus';
import PendingComponent from '../../components/pendingTable';
import Tabs from '../../components/Tabs';
import { DPIconSplitLogo } from '../../icons';

const Dashboard = () => {
  const tabs = [
    { title: 'Payment Status', component: <PaymentStatus /> },
    { title: 'Pending', component: <PendingComponent /> },
  ];
  return (
    <Wrapper>
      <div className="logo">
        <DPIconSplitLogo />
      </div>

      <Tabs tabs={tabs} />
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  max-width: 55rem;
  margin: 0 auto;
  padding: 5.2rem 3rem 1rem 3rem;

  .logo {
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
  }
`;
