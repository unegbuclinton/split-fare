import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PaymentStatus from '../../components/PaymentStatus';
import PendingComponent from '../../components/pendingTable';
import Tabs from '../../components/Tabs';
import { DPIconSplitLogo } from '../../icons';

const Dashboard = () => {
  const [url, setUrl] = useState('');
  const [data, setData] = useState();
  const [loadingState, setLoadingState] = useState(true);
  const [paidEmails, setPaidEmails] = useState([]);
  const [ownerEmail, setOwnerEmail] = useState(false);
  const [invited, setInvited] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('urlKey'));
    if (items) {
      setUrl(items);
    }
    const timer = setTimeout(() => {
      axios
        .get(`https://splitfare-test.onrender.com/getTransaction/${url}`)
        .then((res) => {
          const response = res.data;
          setData(response);
          setPaidEmails(response.emailsPaid);
          setInvited(response.invites);
          setOwnerEmail(response.owner);
        });

      setLoadingState(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [url]);
  const tabs = [
    {
      title: 'Invited',
      component: <PaymentStatus totalEmail={invited} owner={ownerEmail} />,
    },
    {
      title: 'Paid',
      component: (
        <PendingComponent
          loadingState={loadingState}
          paidEmails={paidEmails}
          data={data}
          noOfPaidEmails={paidEmails.length}
          totalEmail={invited.length}
        />
      ),
    },
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
