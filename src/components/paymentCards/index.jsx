import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  DPIconBitcoin,
  DPIconOpay,
  DPIconSplit,
  DPIconStripe,
} from '../../icons';

const PaymentCard = () => {
  const [url, setUrl] = useState('');
  const PaymentMethod = [
    { icon: <DPIconOpay />, color: '#000' },
    {
      icon: <DPIconStripe />,
      color: '#6461FC',
      link: `https://splitfare-test.onrender.com/joinTransaction/${url}`,
    },
    { icon: <DPIconSplit />, color: '#F8F8F8' },
    { icon: <DPIconBitcoin />, color: '#FF7E00' },
  ];

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('urlKey'));
    if (items) {
      setUrl(items);
    }
  }, []);

  return (
    <Wrapper>
      {PaymentMethod?.map(({ icon, color, link }, idx) => (
        <a href={link}>
          <Card color={color} key={idx} target="_blank">
            {icon}
          </Card>
        </a>
      ))}
    </Wrapper>
  );
};

export default PaymentCard;

const Card = styled.div`
  width: fit-content;
  background-color: ${({ color }) => color};
  padding: 1.5rem 1rem;
  border-radius: 0.6rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;
  flex-wrap: wrap;
  gap: 1rem;
`;
